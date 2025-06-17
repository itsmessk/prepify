import React from 'react';
import Agent from "@/components/Agent";
import {getCurrentUser} from "@/lib/actions/auth.actions";

const Interview = async () => {
    const user = await getCurrentUser();

    return (
        <>
            <Agent userName={user?.name} userId={user?.id} type="generate" />
        </>
    );
};

export default Interview;
