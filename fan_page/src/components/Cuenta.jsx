import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function Cuenta() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2><b>Name:</b>{user.name}</h2>
                <p><b>Email:</b> {user.email}</p>
            </div>
        )
    );
}