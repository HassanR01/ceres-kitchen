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

export default async function GetItems() {
    const { items } = await getItems();
    return (
        <>
            <div className='ItemList'>
                <div className='evid'>
                    <h3>Name</h3>
                    <h3>Create</h3>
                    <h3>Rate</h3>
                    <h3>Price</h3>
                </div>
                <div className="items">
                    {items.length && items.map(item => (
                        <Link href={`/admin/Dashboard/editItem/${item._id}`} className='item' key={item._id}>
                                <h3>{item.title}</h3>
                                <h3>{item.createdAt}</h3>
                                <h3>{item.rate} Stars</h3>
                            <h3 style={{ color: '#00ff00'}}>{item.price} EGP</h3>
                        </Link>
                    ))}
                    {items.length === 0 && (<h2>No Items Exist</h2>)}
                </div>
            </div>
        </>
    )
}
