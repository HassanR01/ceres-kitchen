'use client'
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function LogOut() {
  return (
      <>
          <Link href={'/'} onClick={() => confirm('Do you Want to Sign out ?') ? signOut() : null}>Log out</Link>
      </>
  )
}
