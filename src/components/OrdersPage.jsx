import { useOrders } from '../appContext/OrderContext';
import DashboardLayout from '../layout/DashbaordLayout';
import { Link } from 'react-router-dom';

export default function OrdersPage() {

    const { orders, loading } = useOrders();

    async function handleCancelOrder(order){
        const response = fetch('/products/orders/cancel', {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
        })
    }

    if (!orders) {
        return (
            <div className="text-center text-red-500 mt-20">
                No orders selected. Please return to the products page.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6 flex flex-col flex-1 overflow-scroll items-center">
            <h2 className='text-2xl font-semibold px-2 mb-4 w-full text-center  text-black'>Orders</h2>
            {orders.length > 0 && orders.map((order, inx) => (
                <Link
                to={`/dashboard/orders/${order.id}`} 
                className="bg-white shadow-md rounded-2xl p-6 mb-4 w-full max-w-2xl text-lg text-black">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold text-blue-500">
                            OrderId: {order.id}
                        </h2>
                    </div>
                    <p className="">
                        Customer: {order.customerName}
                    </p>
                    <p className="">
                        Product: {order.product.name}
                    </p>
                    <p className="">
                        Validity: {order.product.validity}
                    </p>
                    <p className="">
                        Type: {order.product.planType}
                    </p>
                    <p className="">
                        Data: {order.product.data}
                    </p>
                    <p className="">Status: <span className={`${order.status ==='Completed'? 'text-green-500': order.status === 'failed'? 'text-red-500':'text-yellow-500'}`}>{order.status}</span></p>

                    <div>
                        <button className="btn bg-blue-800 mr-2">Pay ${order.amount}</button>
                        <button 
                        className="btn bg-red-500"
                        onClick={() =>  handleCancelOrder(order)}
                        >Cancel Order</button>
                    </div>

                    
                </Link>
            ))}
        </div>
    );
}