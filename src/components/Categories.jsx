import Image from "next/image"
import Link from "next/link"
export default function Categories({ title , description , src , section, alt}) {
  return (
    <>
        <Image src={src} width={200} height={200} alt={alt} />
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={`/menu#${section}`}>Check</Link>
    </>
  )
}
