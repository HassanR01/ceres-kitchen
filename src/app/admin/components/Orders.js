import Link from "next/link";

export default function Orders() {
  return (
    <>
      <div className='orderList'>
        <div className='evid'>
          <h3>ID</h3>
          <h3>Date</h3>
          <h3>Price</h3>
          <h3>Name</h3>
        </div>
        <div className="orders">
            <Link href={`/admin/Dashboard`} className='order' >
              <h3>#003</h3>
              <h3>23, Jan</h3>
              <h3>2000 EGP</h3>
              <h3>Khaled</h3>
            </Link>
        </div>
      </div>
    </>
  )
}
