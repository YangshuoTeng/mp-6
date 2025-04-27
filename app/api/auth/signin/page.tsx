"use client"
import { signIn } from "next-auth/react"

export default function SignIn() {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "80vh",}}>
            <div style={{padding: "40px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", textAlign: "center", maxWidth: "100%"}}>
                <h1 style={{ marginBottom: "20px", fontSize: "24px", color: "black" }}>
                    Welcome!
                </h1>
                <p style={{ marginBottom: "30px", fontSize: "16px", color: "grey" }}>
                    Sign in with your GitHub account to access your profile information.
                </p>
                <button
                    onClick={() => signIn("github", { redirectTo: "/profile" })}
                    style={{padding: "12px 24px", fontSize: "16px", fontWeight: "bold", backgroundColor: "black", color: "white", border: "none", borderRadius: "6px", cursor: "pointer",}}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "grey")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "black")}
                >
                    Sign In with GitHub
                </button>
            </div>
        </div>
    )
}
