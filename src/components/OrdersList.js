

export default function OrdersList({ orders }) {

    return (
        <>
            {orders.length > 0 && orders.map((order, index) => (

                <div className='order' key={order._id}>
                    <h3>#{index + 1}</h3>
                    {order.items.length === 1 ? (<h3>{order.items.length} item</h3>) : (<h3>{order.items.length} items</h3>)}
                    <h3>{order.date}</h3>
                    <h3 style={{ color: "#00ff00"}}>{order.totalPrice} EGP</h3>
                    <h3>{order.status}</h3>
                </div>
            ))}
            {orders.length === 0 && (<h3>No Orders Added</h3>)}
        </>
    )
}
