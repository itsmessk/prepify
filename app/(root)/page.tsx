import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div>
            Home Page
            <p>
                <Link href={'/sign-up'}>Sign in</Link>
            </p>
        </div>
    );
};

export default Page;