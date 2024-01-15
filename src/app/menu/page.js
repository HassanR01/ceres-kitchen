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
            <li className="selected">All</li>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Ready To Heat</li>
            <li>Pre Cook</li>
            <li>Pasta</li>
          </ul>
        </div>
        <div className={'items'}>
          <ItemsList />
        </div>
      </section>
    </>
  )
}
