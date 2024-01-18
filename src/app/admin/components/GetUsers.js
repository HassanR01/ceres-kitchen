import React from 'react'
import MakeAdmin from './buttoms/MakeAdmin'

const getUsers = async () => {
  const apiUrl = process.env.API_URL

  try {
    const res = await fetch(`${apiUrl}/api/users`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error('Cannot fetch the item api')
    }

    return res.json()
  } catch (error) {
    console.log('err', error);
  }
}

export default async function GetUsers() {
  const { user: users } = await getUsers()

  return (
    <>
      <div className='usersList'>
        <div className='evid'>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Role</h3>
          <h3>In Basket</h3>
          <h3>Option</h3>
        </div>
        <div className='users'>
          {users.map(user => (
            <div className='user' key={user._id}>
              <h3>{user.name}</h3>
              <h3 title={user.email}>{user.email.slice(0 , 6)}..</h3>
              <h3>{user.role}</h3>
              <h3>{user.orders.length} Item</h3>
              <MakeAdmin role={user.role} email={user.email} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
