"use client";
import { signIn } from "next-auth/react";

export default function SignInButton() {
    return (
        <button
            onClick={() => signIn("github", { redirectTo: "/profile" })}
            style={{padding: "12px 24px", fontSize: "16px", fontWeight: "bold", backgroundColor: "black", color: "white", border: "none", borderRadius: "6px", cursor: "pointer",}}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "grey")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "black")}
        >
            Sign In with GitHub
        </button>
    );
}
