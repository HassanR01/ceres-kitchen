

const getOrders = async () => {
  const apiUrl = process.env.API_URL
  try {
    const res = await fetch(`${apiUrl}/api/orders`, {
      cache: 'no-store'
    })

    if (res.ok) {
      return res.json()
    }
  } catch (error) {
    console.log(error);
  }

}

export default async function Orders() {
  const { orders } = await getOrders()
  return (
    <>
      <div className='orderList'>
        <div className='evid'>
          <h3>ID</h3>
          <h3>Items</h3>
          <h3>Date</h3>
          <h3>Price</h3>
          <h3>Name</h3>
        </div>
        <div className="orders">
          {orders.length > 0 && orders.map((order, index) => (
            <div className='order' key={order._id}>
              <div className="data">
                <h3>#{index + 1}</h3>
                {order.items.length === 1 ? (<h3>{order.items.length} item</h3>) : (<h3>{order.items.length} items</h3>)}
                <h3>{order.createdAt.slice(0, 10)}</h3>
                <h3>{order.totalPrice} EGP</h3>
                <h3>{order.person.name}</h3>
              </div>
              <div className="items">
                {order.items.map(item => (
                  <div className="item" key={item._id}>
                    <h3>{item.title}</h3>
                    <h3>{item.quantity}</h3>
                    <h3>{item.price * item.quantity}</h3>
                    <button>Sent To kitchen</button>
                  </div>
                ))}
                <div className="info">
                  <h3>Location: {order.address}</h3>
                  <h3>Phone Number: { order.phone }</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
