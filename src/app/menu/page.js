import Title from "@/src/components/Title"
import './menu.css'
import ItemsList from "@/src/components/ItemsList";

export default function Menu() {
  return (
    <>
      <Title title={'Menu'} />
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
    </>
  )
}
