import Title from "@/src/components/Title"
import Image from "next/image"
import './contact.css'
export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="contact">
          <div className="form">
            <h2>Contact Us</h2>
            <form>
              <div className="Udata">
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email" />
              </div>
              <div className="message">
                <input type="text" name="subject" placeholder="Enter The Title" />
                <textarea name="message" placeholder="Message" ></textarea>
              </div>
              <button>Sent The Message</button>
            </form>
          </div>
          <div className="map">
            <Image src={'/map.png'} width={500} height={700} alt="map" />
          </div>
        </div>
        <div className="channels">

        </div>
      </section>
    </>
  )
}
