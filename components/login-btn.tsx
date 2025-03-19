"use client"
import { useSession, signOut } from "next-auth/react"
import { useEffect } from "react"
import { redirect } from "next/navigation"
import Loader from "./Loader"
export default function LoginButton() {
  const { data: session, status } = useSession()
  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/api/auth/signin");
    }
  }, [status]);

  if (status === "loading") return <Loader/>;

  if (session) {
    return (
      <>
        {/* Signed in as {session.user?.email} <br /> */}
        {/* {JSON.stringify(session)} <br /> */}
        <span onClick={() => signOut()}>Sign out</span>
      </>
    )
  }

}