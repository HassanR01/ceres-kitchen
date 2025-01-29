'use client'
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'

export default function EditItemForm({ id, image, title, titleAr, description, category, price, status }) {
    const [newimage, setNewImage] = useState(image);
    const [newtitle, setNewTitle] = useState(title);
    const [newtitleAr, setNewTitleAr] = useState(titleAr);
    const [newdescription, setNewDescription] = useState(description);
    const [newcategory, setNewCategory] = useState(category);
    const [newprice, setNewPrice] = useState(price);
    const [newstatus, setNewStatus] = useState(status);
    const { data: session } = useSession()
    let email = session?.user?.email
    const handelEditItemForm = async (e) => {
        e.preventDefault()
        try {

            const res = await fetch(`/api/items/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newimage, newtitle, newtitleAr, newdescription, newcategory, newprice, newstatus })
            })

            if (res.ok) {
                location.replace(`/admin?email=${email}`)
            } else {
                throw new Error('Cannot Edit the Item')
            }
        } catch (error) {

        }
    }


    const deleteItem = async (id) => {
        if (confirm(`Do You Want to Delete ${title} Item`)) {
            await fetch(`/api/items/${id}`, {
                method: 'DELETE',
            })

            location.replace(`/admin?email=${email}`)
        }
    }

    return (
        <>
            <h2>Edit {newtitle} Item</h2>
            <form onSubmit={handelEditItemForm}>
                <div className='inputs'>
                    <input value={newtitle} type="text" name="Title" placeholder="Enter The Name of The Item" onChange={(e) => setNewTitle(e.target.value)} />
                    <input value={newtitleAr} type="text" name="Title" placeholder="Enter The Name of The Item In Arabic" onChange={(e) => setNewTitleAr(e.target.value)} />
                    <input value={newimage} type="text" name="ImageURL" placeholder="EnterImage URL From Cloudnary" onChange={(e) => setNewImage(e.target.value)} />
                    <input value={newcategory} list="category" placeholder="Category" onChange={(e) => setNewCategory(e.target.value)} />
                    <datalist id="category">
                        <option value="Ready_To_Heat" >Ready To Heat</option>
                        <option value="Pre_Cooked" >Pre Cooked</option>
                        <option value="Air_Fire" >Air Fire</option>
                        <option value="Bakery" >Bakery</option>
                        <option value="Appetizers" >Appetizers</option>
                        <option value="Salads" >Salads</option>
                        <option value="Service" >Service</option>
                    </datalist>
                    <input value={newstatus} list="status" placeholder="Status" onChange={(e) => setNewStatus(e.target.value)} />
                    <datalist id="status">
                        <option value="show" >Show</option>
                        <option value="hide" >Hide</option>
                    </datalist>
                    <input value={newprice} type="number" min={0} placeholder="Enter Price" onChange={(e) => setNewPrice(e.target.value)} />
                    <textarea value={newdescription} type="text" name="Description" placeholder="Enter Small Description about The Item" onChange={(e) => setNewDescription(e.target.value)} />

                </div>
                <button type="Submit">
                    Edit Item
                </button>
            </form>

            <button onClick={() => deleteItem(id)}>Delete Item</button>
        </>
    )
}
