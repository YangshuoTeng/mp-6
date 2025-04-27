import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ProfilePage() {
    const session = await auth();

    if (!session?.user) {
        redirect("/api/auth/signin");
    }

    const { name, email, image } = session.user;

    return (
        <div style={{maxWidth: "80%", margin: "50px auto", padding: "30px", backgroundColor: "white", borderRadius: "8px", fontFamily: "Arial, sans-serif"}}>
            <h1 style={{ fontSize: "2rem", fontWeight: "600", color: "black", marginBottom: "20px" }}>
                Welcome, {name}!
            </h1>
            <p style={{ fontSize: "1rem", color: "grey", marginBottom: "20px" }}>
                Email: <strong>{email}</strong>
            </p>
            {image && (
                <img
                    src={image}
                    alt="Profile Picture"
                    width={100}
                    height={100}
                    style={{borderRadius: "50%", marginTop: "20px", border: "2px solid #ddd"}}/>
            )}
            <Link href="/api/auth/signout">
                <button style={{padding: "12px 24px", fontSize: "16px", fontWeight: "bold", backgroundColor: "black", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", marginTop: "30px", display: "block", width: "100%", textAlign: "center"}}>
                    Sign Out
                </button>
            </Link>
        </div>
    );
}
