import './dashboard.css'
import Script from "next/script";
import Overviews from "./components/Overviews";
import AddItems from "./components/AddItems";
import GetUsers from "./components/GetUsers";
import GetItems from "./components/GetItems";
import Orders from "./components/Orders";
import UserInfo from "./components/UserInfo";

const getAdmins = async () => {
  const apiUrl = process.env.API_URL
  try {

    const res = await fetch(`${apiUrl}/api/admins`, {
      cache: "no-store"
    })

    if (!res.ok) {
      throw new Error('Faild to Get the Admins')
    }
    return res.json()

  } catch (error) {
    console.log(error);
  }

}

export default async function Dashboard({ searchParams }) {
  const { admin } = await getAdmins()
  const email = searchParams.email
  const Admins = []

  for (let i = 0; i < admin.length; i++) {
    Admins.push(admin[i].email)
  }

  if (Admins.includes(email)) {

    return (
      <>
        <section id="dashboard">
          <div className={'partitionSelection'}>
            <UserInfo />
            <ul>
              <li data-part='overviews' className="selected">Overviews</li>
              <li data-part='orderList'>Order List</li>
              <li data-part='items'>Items</li>
              <li data-part='addItems'>Add Items</li>
              <li data-part='users'>Users</li>
            </ul>
          </div>
          <div className={'partitions'}>
            {/* Overviews */}
            <div id="overviews" className={'partition active'}>
              <h2>Overviews</h2>
              <Overviews />
            </div>

            {/* Order List */}
            <div id="orderList" className={'partition'}>
              <h2>Order List</h2>
              <Orders />
            </div>

            {/* Items */}
            <div id="items" className={'partition'}>
              <h2>Items</h2>
              <GetItems />
            </div>

            {/* Add Items */}
            <div id="addItems" className={'partition'}>
              <h2>Add Items</h2>
              <AddItems />
            </div>

            {/* Users */}
            <div id="users" className={'partition'}>
              <h2>Users</h2>
              <GetUsers />
            </div>
          </div>

        </section>

        <Script src={'/JS/Dashboard.js'} />
      </>
    )
  } else {
    return (

      <>
        <section className='isNotAdmin'>
          <h2>This Page Is Just For Admins!</h2>
        </section>
      </>
    )
  }
}
