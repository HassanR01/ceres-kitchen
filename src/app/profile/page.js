import Title from '@/src/components/Title';
import './profile.css'
import OrdersList from '@/src/components/OrdersList';
import UserInfo from '../admin/components/UserInfo';
import LogOut from '@/src/components/buttons/LogOut';

const getOrderFromUser = async (email) => {
    const apiUrl = process.env.API_URL
    try {
        const res = await fetch(`${apiUrl}/api/users/${email}`, {
            cache: 'no-store',
        })

        if (!res.ok) {
            throw new Error('Cannot fetch the api')
        }

        return res.json()

    } catch (error) {
        console.log(error);
    }

}

export default async function ManageAccount({ searchParams }) {
    const email = searchParams.email
    const {user} = await getOrderFromUser(email)
    const {orders} = user    
    return (
        <>
            <Title title={'Profile'} />
            <section id='profileInfo'>
                <UserInfo />
                <div className='orderslist'>
                    <h2>Orders</h2>
                    <div className='evid'>
                        <h3>ID</h3>
                        <h3>Items</h3>
                        <h3>Date</h3>
                        <h3>Price</h3>
                        <h3>Status</h3>
                    </div>
                    <div className='orders' >
                        <OrdersList orders={orders} />
                    </div>
                </div>
                <LogOut />
            </section>
        </>
    )
}
