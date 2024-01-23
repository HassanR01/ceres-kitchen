import Link from "next/link";

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
  const {orders} = await getOrders()
  console.log(orders);

  


  return (
    <>
      <div className='orderList'>
        <div className='evid'>
          <h3>ID</h3>
          <h3>Date</h3>
          <h3>Price</h3>
          <h3>Name</h3>
        </div>
        <div className="orders">
          {orders.length > 0 && orders.map((order, index) => (
            <Link href={`/admin`} className='order' key={order._id}>
              <h3>#{index + 1}</h3>
              <h3>{order.createdAt.slice(0,10)}</h3>
              <h3>{order.totalPrice} EGP</h3>
              <h3>{order.person.name}</h3>
            </Link>
          )) }
        </div>
      </div>
    </>
  )
}
