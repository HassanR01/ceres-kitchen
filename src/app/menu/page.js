import Title from "@/src/components/Title"
import './menu.css'
import ItemsList from "@/src/components/ItemsList";
import Script from "next/script";

export default function Menu() {
  return (
    <>
      <Title title={'Check our tasty Menu'} />
      <section id="itemsMenu">
        <div className="filters">
          <ul>
            <li data-category='item' className="selected">All</li>
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
      <Script src="JS/menu.js" />
    </>
  )
}
