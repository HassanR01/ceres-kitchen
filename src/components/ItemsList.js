import Image from "next/image";
import Link from "next/link";

const getItems = async () => {
    const apiUrl = process.env.API_URL

    try {
        const res = await fetch(`${apiUrl}/api/items`, {
            cache: "no-store",
        })

        if (!res.ok) {
            throw new Error('Cannot fetch the item api')
        }

        return res.json()
    } catch (error) {
        console.log('err', error);
    }
}

export default async function ItemsList() {
    const { items } = await getItems();

    return (
        <>
            {items.length > 0 && items.map(item => (
                <Link href={`/menu/${item._id}`} className={`item ${item.category} ${item.status} active`} key={item._id}>
                    <div className="image">
                        <Image src={item.image} width={200} height={200} alt={item.title} />
                    </div>
                    <div className="text">
                        <h3>{item.title}</h3>
                        <h3>{item.titleAr}</h3>
                        <h5>{item.price} EGP</h5>
                    </div>
                </Link>
            ))}
        </>
    )
}
