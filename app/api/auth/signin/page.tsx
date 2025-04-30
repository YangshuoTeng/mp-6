import SignInButton from "@/components/SignInButton";

export default function SignIn() {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "80vh",}}>
            <div style={{padding: "40px", backgroundColor: "white", borderRadius: "20px", textAlign: "center", maxWidth: "100%"}}>
                <h1 style={{ marginBottom: "20px", fontSize: "24px", color: "black" }}>
                    Welcome!
                </h1>
                <p style={{ marginBottom: "30px", fontSize: "16px", color: "grey" }}>
                    Sign in with your GitHub account to access your profile information.
                </p>
                <SignInButton />
            </div>
        </div>
    )
}
