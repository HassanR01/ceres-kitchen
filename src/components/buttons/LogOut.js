'use client'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LogOut() {
  const { status, data: session } = useSession()
  if (status === 'authenticated') {

    return (
      <>
        <Link href={'/'} onClick={() => confirm('Do you Want to Sign out ?') ? signOut() : null}>Log out</Link>
      </>
    )
  } else {
    return (
      <>
      
      </>
    )
  }
}
