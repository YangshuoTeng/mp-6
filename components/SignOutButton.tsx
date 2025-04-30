"use client";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
    return (
        <button
            onClick={() => signOut()}
            style={{padding: "12px 24px", fontSize: "16px", fontWeight: "bold", backgroundColor: "black", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", marginTop: "30px", width: "100%", textAlign: "center",}}
            onMouseOver={(e) => {e.currentTarget.style.backgroundColor = "grey";}}
            onMouseOut={(e) => {e.currentTarget.style.backgroundColor = "black";}}
        >
            Sign Out
        </button>
    );
}
