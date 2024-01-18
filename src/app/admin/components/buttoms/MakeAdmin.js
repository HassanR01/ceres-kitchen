'use client'

export default function MakeAdmin({ role, email }) {

  if (role === 'visitor') {
    role = 'admin'
  } else {
    role = 'visitor'
  }

  const changeUser = async () => {
    if (role === 'visitor') {
      await fetch(`/api/admins?email=${email}`, {
        method: "DELETE",
      })
    } else {
      await fetch('/api/admins', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email })
      })
    }
    const confirmed = confirm("Are You Sure ?")

    if (confirmed) {
      const resU = await fetch(`/api/users/${email}`, {
        method: "PUT",
        headers: {
          "Content-type": 'application/json'
        },
        body: JSON.stringify({ role })
      })


      if (resU.ok) {
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
