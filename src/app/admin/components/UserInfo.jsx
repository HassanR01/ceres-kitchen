'use client'
import { useSession } from "next-auth/react"
import Image from "next/image";

export default function UserInfo() {
    const { data: session } = useSession();
  return (
      <div className={"userInfo"}>
          <Image src={session?.user?.image} width={120} height={120} alt="user Image" />
              <h2>{session?.user?.name}</h2>
              <p>{session?.user?.email}</p>
      </div>
  )
}
