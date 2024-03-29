import Image from "next/image"
import WLogo from '../../../public/ckwhite.svg'
import './about.css'

export const metadata = {
  title: 'About Us | Ceres Kitchen',
  description: 'Your source for fresh, healthy meals online, Enjoy nutritious dishes made with love and delivered to you hassle-free. Generated by Rockai Dev',
}

export default function About() {
  return (
    <>
      <section id="about">
        <div className="info">
          
          <div className={'text'}>
            <h2>Fast Food <span>Delivery</span> in city</h2>
            <p>Food Brings  People Together On Many Different Levels, it's Nourishment Of The Soul And Body</p>
            <div className={'features'}>
              <div className={'feature'}>
                <Image src={'/clock.png'} width={50} height={50} alt="feature icon" />
                <h5>Record time</h5>
              </div>
              <div className={'feature'}>
                <Image src={'/medal.png'} width={50} height={50} alt="feature icon" />
                <h5>healthy Food</h5>
              </div>
            </div>
          </div>
          <div className={'image'}>
            <Image src={WLogo} width={500} height={500} alt="lunch time" />
          </div>
        </div>
      </section>
    </>
  )
}
