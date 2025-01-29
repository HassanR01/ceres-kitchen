import Image from "next/image";
import Link from "next/link";
import Script from "next/script";


export default function Footer() {
  return (
    <footer>
      <div className={'links'}>
        <ul>
          <li><Link href={'https://www.facebook.com/profile.php?id=100095446710648'} target="_blank"><Image src={'/facebook.png'} width={30} height={30} alt="facebook icon" priority /></Link></li>
          <li><Link href={'https://www.instagram.com/cererestaurant'} target="_blank"><Image src={'/instagram.png'} width={30} height={30} alt="instagram icon" /></Link></li>
          <li><Link href={'/'} target="_blank"><Image src={'/x.png'} width={30} height={30} alt="X icon" /></Link></li>
          <li><Link href={'/'} target="_blank"><Image src={'/tiktok.png'} width={30} height={30} alt="Tiktok icon" /></Link></li>
        </ul>
      </div>
      <div className="copyright">
        <p>Copyright &copy; <span className={'copyrightY'}></span> <Link href={'https://www.rockaidev.com'} target="_blank">Rockai Dev</Link> | All rights reseved.</p>
      </div>
      <Script src="JS/main.js" />
    </footer>
  )
}
