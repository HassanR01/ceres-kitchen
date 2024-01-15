import Image from "next/image";
import './dashboard.css'
import Script from "next/script";
import Overviews from "../components/Overviews";
import AddItems from "../components/AddItems";
import GetUsers from "../components/GetUsers";
import GetItems from "../components/GetItems";
import AddOffers from "../components/AddOffers";
import Orders from "../components/Orders";
import UserInfo from "../components/UserInfo";


export default function Dashboard() {
    return (
      <>
        <section id="dashboard">
          <div className={'partitionSelection'}>
            <UserInfo />
            <ul>
              <li data-part='overviews'>Overviews</li>
              <li data-part='orderList'>Order List</li>
              <li data-part='offers'>Offers</li>
              <li data-part='items'>Items</li>
              <li data-part='addItems'>Add Items</li>
              <li data-part='users'>Users</li>
            </ul>
          </div>
          <div className={'partitions'}>
            {/* Overviews */}
            <div id="overviews" className={'partition'}>
              <h2>Overviews</h2>
              <Overviews />
            </div>

            {/* Order List */}
            <div id="orderList" className={'partition'}>
              <h2>Order List</h2>
              <Orders />
            </div>

            {/* Offers */}
            <div id="offers" className={'partition'}>
              <h2>Offers</h2>
              <AddOffers />
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
            <div id="users" className={'partition active'}>
              <h2>Users</h2>
              <GetUsers />
            </div>
          </div>

        </section>

        <Script src={'/JS/Dashboard.js'} />
      </>
    )
}
