"use server";

import {db, auth} from "@/firebase/admin";
import {cookies} from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7;

export const signUp = async (params: SignUpParams) => {
    const {uid, name, email} = params;
    try {
        const userRecord = await db.collection('users').doc(uid).get();

        if (userRecord.exists) {
            return {
                success: false,
                message: 'User already exists'
            }
        }
        await db.collection('users').doc(uid).set({
            name,
            email,
        })

        return {
            success: true,
            message: 'User created successfully.'
        }
    } catch (err: any) {
        console.error('Error Creating a User', err);
        if (err.code === 'auth/email-already-exists') {
            return {
                success: false,
                message: 'Email already exists'
            }
        }
        return {
            success: false,
            message: 'Error Creating a User',
            error: err.message
        }
    }
}

export const signIn = async (params: SignInParams) => {
    const {email, idToken} = params;
    try {
        const userRecord = await auth.getUserByEmail(email);
        if (!userRecord) {
            return {
                success: false,
                message: 'User does not exist'
            }
        }
        await setSessionCookie(idToken);

    } catch (err) {
        console.error('Error loggingIn', err);
        return {
            success: false,
            message: 'Error Creating a User',
        }
    }
}

export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies();

    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: ONE_WEEK * 1000,
    });

    cookieStore.set('session', sessionCookie, {
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
    })
}

export async function getCurrentUser(): Promise<User | null> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value;

    if (!sessionCookie) {
        return null;
    }

    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
        const userRecord = await db.collection('users').doc(decodedClaims.uid).get();
        if (!userRecord.exists) {
            return null;
        }

        return {
            ...userRecord.data(),
            id: decodedClaims.uid,
        } as User;

    } catch (err) {
        console.error('Error loggingIn', err);
        return null;
    }
}

export async function isAuthenticated() {
    const user = await getCurrentUser();
    return !!user;
}


