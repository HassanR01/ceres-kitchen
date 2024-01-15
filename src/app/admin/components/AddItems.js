'use client'

import { useState } from "react"

export default function AddItems() {
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ _id , set_Id ] = useState("");
    const [ image , setImage ] = useState("");
    const [ category , setCategory ] = useState("");
    const [ price , setPrice ] = useState("");


    const handelSubmit = async (e) => {
        e.preventDefault()
         
        if (!title || !description || !_id || !image || !category || !price) {
            alert('All Details are required!')
            return;
        }

        try {
            const res = await fetch('/api/items', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    title, description, _id, image, category, price
                })
            })

            
            if (res.ok) {
                alert('Added Successfully')
                setTitle("")
                setDescription("")
                set_Id("")
                setImage("")
                setCategory("")
                setPrice("")
            } else {
                alert('Check the Item_Id if it already exist')
                throw new Error('Faild To Create The Order')
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
      <>
        <form onSubmit={handelSubmit}>
              <input value={title} type="text" name="Title" placeholder="Enter The Name of The Item" onChange={(e) => setTitle(e.target.value)} />
              <textarea value={description} type="text" name="Description" placeholder="Enter Small Description about The Item" onChange={(e) => setDescription(e.target.value)} />
              <input value={_id.replaceAll(" " , "_")} type="text" name="ID" placeholder="Ex: www.Domain.com/menu/{Item Id}" onChange={(e) => set_Id(e.target.value)} />
              <input value={image} type="text" name="ImageURL" placeholder="EnterImage URL From Cloudnary" onChange={(e) => setImage(e.target.value)} />
              <input value={category} list="category" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
              <datalist id="category">
                  <option value="Breakfast" >Breakfast</option>
                  <option value="Lunch" >Lunch</option>
                  <option value="Dinner" >Dinner</option>
                  <option value="Ready_To_Heat" >Ready To Heat</option>
                  <option value="Pre_Cook" >Pre Cook</option>
                  <option value="Pasta" >Pasta</option>
              </datalist>
              <input value={price} type="number" min={0} placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)} />
              <button type="Submit">
                  Add Item
              </button>
        </form>
      </>
  )
}
