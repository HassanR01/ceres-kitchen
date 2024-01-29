import Image from "next/image";


export default function OrdersList({ orders }) {

    console.log(orders[0].items);
    return (
        <>
            {orders.length > 0 && orders.map((order, index) => (

                <div className='order' key={order._id}>
                    <div className="data">

                        <h3>#{index + 1}</h3>
                        {order.items.length === 1 ? (<h3>{order.items.length} item</h3>) : (<h3>{order.items.length} items</h3>)}
                        <h3>{order.date}</h3>
                        <h3 style={{ color: "#00ff00" }}>{order.totalPrice} EGP</h3>
                        <h3>{order.status}</h3>
                    </div>
                    <div className="items">
                        {order.items.map(item => (
                            <div className="item" key={item._id}>
                                <h3>{item.title}</h3>
                                <h3>{item.quantity} KG</h3>
                                <h3>{item.price} EGP</h3>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {orders.length === 0 && (<h3>No Orders Added</h3>)}
        </>
    )
}
