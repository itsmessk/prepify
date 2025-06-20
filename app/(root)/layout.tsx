import React, {ReactNode} from 'react';
import Link from "next/link";
import Image from "next/image";
import { handleLogout, isAuthenticated } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";
import { LogOut } from "lucide-react";


const RootLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) {
        redirect('/sign-in');
    }


    return (
        <div className="root-layout">
            <nav className="flex items-center justify-between px-4 py-2 shadow-md">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="logo" width={38} height={32} />
                    <h2 className="text-primary-100">Prepify</h2>
                </Link>

                <form action={handleLogout}>
                    <button type="submit" className="hover:text-primary-100" title="Logout">
                        <LogOut size={20} />
                    </button>
                </form>
            </nav>

            {children}
        </div>
    );
};

export default RootLayout;
