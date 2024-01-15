import LoginForm from "@/src/components/LoginForm";
import './form.css'
import Bgimg from '../../../public/bg.png'
export default function LogIn() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Bgimg.src})`,
          backgroundSize: 'cover'
        }}
        id="login">
        <h2>Login Form</h2>
        <LoginForm />
      </section>
    </>
  )
}
