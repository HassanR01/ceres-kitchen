import React from 'react'
import EditItemForm from '../../../components/EditItemForm'
import './editItem.css'
const getItemToEdit = async (id) => {
  const apiUrl = process.env.API_URL
  const res = await fetch(`${apiUrl}/api/items/${id}`, {
    cache: 'no-store'
  })

  if (res.ok) {
    return res.json()
  } else {
    throw new Error("Faild to get the item")
  }
}

export default async function ItemDetails({ params }) {
  const { itemId } = params;
  const { item } = await getItemToEdit(itemId)
  const { _id , image, title, titleAr, description, category, price } = item
  return (
    <>
      <section id='editItem'>
        <EditItemForm id={_id} image={image} title={title} titleAr={titleAr} description={description} category={category} price={price} />
      </section>
    </>
  )
}
