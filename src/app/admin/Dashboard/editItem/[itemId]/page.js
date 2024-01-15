import React from 'react'

export default function ItemDetails({ params }) {
  const { itemId } = params;
  console.log(itemId);
  return (
    <div>ItemDetails</div>
  )
}
