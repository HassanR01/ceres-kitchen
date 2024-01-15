import Link from "next/link";

export default function Sellingorder({ name , price , items}) {
  return (
    <Link href={'/'} className={'order'}>
        <div className={'details'}>
            <h3>{name}</h3>
            <p>{items}</p>
        </div>
        <div className={'price'}>
            <h5>{price}</h5>
        </div>
    </Link>
  )
}
