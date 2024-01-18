
import Image from "next/image"
import WLogo from '../../public/ckwhite.svg'
import Sellingorder from "../components/Sellingorder"
import ItemsList from "../components/ItemsList"



export default function Home() {
  let items = ['chicken', 'cook', 'salat']
  return (
    <>
      {/* Home Section */}
      <section id="home">
        <div className={'text'}>
          <Image src={WLogo} width={260} height={130} alt="Ceres Kitchen Logo" />
          <h1><span>Delicious</span> Kitchen</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse eligendi nemo voluptates at suscipit dicta doloribus iste</p>
        </div>

      </section>

      <section id="itemsMenuHP">
        <div className="filters">
          <ul>
            <li data-category='Ready_To_Heat'>Ready To Heat</li>
            <li data-category='Pre_Cooked'>Pre Cooked</li>
            <li data-category='Air_Fire'>Air Fire</li>
            <li data-category='Bakery'>Bakery</li>
            <li data-category='Appetizers'>Appetizers</li>
            <li data-category='Salads'>Salads</li>
            <li data-category='Service'>Service</li>
          </ul>
        </div>
        <div className={'items'}>
          <ItemsList />
        </div>
      </section>

      {/* Expect Section */}
      <section id="expect">
        <div className={'image'}>
          <Image src={'/order.svg'} width={500} height={500} alt="order" />
        </div>
        <div className={'text'}>
          <h2>We Provide <span>Healthy</span> Food</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse eligendi nemo voluptates at suscipit dicta doloribus iste iure! Rem magnam quo consequatur accusantium id delectus, omnis sequi nisi reprehenderit illo?</p>
          <div className={'rate'}>
            <Image src={'/star.gif'} width={100} height={100} alt="star gif" />
            <div className={'ratetext'}>
              <h4>Our Happy Customers</h4>
              <p>4.9<span>(2.3K reviews)</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* recommendation Section */}
      <section id="rec">
        <div className={'image'}>
          <Image src={'/lunchtime.svg'} width={500} height={500} alt="lunch time" />
        </div>
        <div className={'text'}>
          <h2>Best Selling <span>Orders</span></h2>
          <p>Food For The Body Is Not Enough, There Must Be Food For The Soul</p>
          <div className={'orders'}>
            <Sellingorder name='order 1' price='$50' items={`${items.join('; ')}`} />
            <Sellingorder name='order 1' price='$50' items={`${items.join('; ')}`} />
            <Sellingorder name='order 1' price='$50' items={`${items.join('; ')}`} />
          </div>
        </div>
      </section>

    </>
  )
}
