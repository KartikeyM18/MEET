"use client"
import { useSession, signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { useEffect } from "react"
import { redirect } from "next/navigation"
export default function LoginButton() {
  const { data: session, status } = useSession()
  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/api/auth/signin");
    }
  }, [status]);

  if (status === "loading") return <p>loading...</p>;

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        {JSON.stringify(session)} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }

}