'use client'
import Image from "next/image"
import Link from "next/link"
import Bgimage from '../../public/bg.png'
import Interior from '../../public/cereskitcheninterior.png'
import Swiper from '../components/swiper'
import Sellingorder from "../components/Sellingorder"
import { useSession } from "next-auth/react"

export default function Home() {
  let items = ['chicken', 'cook', 'salat']
  const { status, data: session } = useSession();

  return (
    <>
      {/* Home Section */}
      <section id="home" style={{
        backgroundImage: `url(${Bgimage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className={'text'}>
          <h1>Enjoy Our <span>Delicious</span> Food</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse eligendi nemo voluptates at suscipit dicta doloribus iste iure! Rem magnam quo consequatur accusantium id delectus, omnis sequi nisi reprehenderit illo?</p>
          <div className={'links'}>
            <Link href={'/'}>Order Now</Link>
            <Link href={'/menu'}>Menu</Link>
          </div>
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

      {/* Show Categories Section */}
      <section id="categories">
        <h2>Popular Categories</h2>
        <Swiper />
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

      {/* Service Section */}
      <section id="service">
        <div className={'text'}>
          <h2>Fast Food <span>Delivery</span> in city</h2>
          <p>Food Brings  People Together On Many Different Levels, it's Nourishment Of The Soul And Body</p>
          <div className={'features'}>
            <div className={'feature'}>
              <Image src={'/clock.png'} width={50} height={50} alt="feature icon" />
              <h5>This is A Feature</h5>
            </div>
            <div className={'feature'}>
              <Image src={'/medal.png'} width={50} height={50} alt="feature icon" />
              <h5>This is A Feature</h5>
            </div>
          </div>
        </div>
        <div className={'image'}>
          <Image src={'/delivery.svg'} width={500} height={500} alt="lunch time" />
        </div>
      </section>

    </>
  )
}
