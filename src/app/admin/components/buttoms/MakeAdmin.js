'use client'

export default function MakeAdmin({ role, email }) {

  if (role === 'visitor') {
    role = 'admin'
  } else {
    role = 'visitor'
  }

  const changeUser = async () => {
    const confirmed = confirm("Are You Sure ?")

    if (confirmed) {
      const res = await fetch(`/api/users/${email}`, {
        method: "PUT",
        headers: {
          "Content-type": 'application/json'
        },
        body: JSON.stringify({role})
      })

      if (res.ok) {
        location.reload()
      } else {
        throw new Error("Cannot Change The User!")
      }

    }
  }
  
  return (
    <>
        {role === 'visitor' && (<button onClick={changeUser}>Make visitor</button>)}
      {role === 'admin' && (<button onClick={changeUser}>Make Admin</button>)}
    </>
  )
}
