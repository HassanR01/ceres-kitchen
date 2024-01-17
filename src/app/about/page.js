import Image from "next/image"
import WLogo from '../../../public/ckwhite.svg'
import './about.css'
export default function About() {
  return (
    <>
      <section id="about">
          <Image src={WLogo} width={200} height={100} alt="Ceres Kitchen Logo" />
        <h1>Ceres Kitchen</h1>
        <div className="info">
          
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
        </div>
      </section>
    </>
  )
}
