import Title from "@/src/components/Title"
import Image from "next/image"
import './basket.css'

const getUserbyEmail = async (email) => {
  const apiUrl = process.env.API_URL

  try {
    const res = await fetch(`${apiUrl}/api/users/${email}`, {
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

export default async function Basket({ params }) {
  const { email } = params;
  const { user } = await getUserbyEmail(email)
  const items = user.basket
  let totalPrice = 0
  for (let i = 0; i < items.length; i++) {
    totalPrice += (items[i].price * items[i].quantity)
  }

  return (
    <>
      <Title title={'Basket'} />
      <section id="basket">
        <div className="items">
          {items.length > 0 && items.map(item => (
            <div className="item" key={item._id}>
              <Image src={item.image} width={100} height={70} alt={item.title} />
              <h3>{item.title}</h3>
              <h3>{item.quantity} KG</h3>
              <h4>{item.price * item.quantity} EGP</h4>
              <button>Cancel</button>
            </div>
          ))}
        </div>
        <div className="orderNow">
          <h2>{totalPrice} EGP</h2>
          <button>Order Now!</button>
        </div>
      </section>
    </>
  )
}
