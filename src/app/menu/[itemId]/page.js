import AddReview from "@/src/components/AddReview";
import Title from "@/src/components/Title";
import Image from "next/image";
import './itemstyle.css'
import SendToBasket from "@/src/components/SendToBasket";

const getOrderById = async (id) => {
  const apiUrl = process.env.API_URL
  try {
    const res = await fetch(`${apiUrl}/api/items/${id}`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Cannot fetch the api')
    }

    return res.json()

  } catch (error) {
    console.log(error);
  }


}

// or Dynamic metadata
export async function generateMetadata({ params }) {
  const { itemId } = params
  const {item} = await getOrderById(itemId)
  return {
    title: item.title,
    description: item.description,
    siteName: 'Ceres Kitchen',
    images: [
      {
        url: item.image, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ]
  }
}

export default async function Item({ params }) {
  const { itemId } = params;
  const { item } = await getOrderById(itemId);
  return (
    <>
      <Title title={`${item.category.replaceAll('_', " ")}`} />
      <section id="itemInfo">
        <div className="image">
          <Image src={item.image} width={400} height={300} alt={item.title} />
        </div>
        <div className="text">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <h4>Price: <span>{item.price} EGP</span></h4>
          <h5>
            <Image src={'/star.gif'} width={30} height={30} alt="star" /> {item.rate} stars
          </h5>
          <SendToBasket image={item.image} title={item.title} price={item.price} />
        </div>

      </section>
      {/* <div className="reviews">
        <h2>Reviews</h2>
        <AddReview />
      </div> */}
    </>
  )
}
