import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useOrders } from '../appContext/OrderContext';
import DashboardLayout from '../layout/DashbaordLayout';

export default function OrderViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const { orders } = useOrders();

  useEffect(() => {
    const foundOrder = orders?.find((o) => o.id == id);
    setOrder(foundOrder || null);
    setLoading(false);
  }, [orders, id]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-blue-500 text-lg animate-pulse">
        Loading order details...
      </div>
    );
  }

  if (!order) {
    return (
      <div className="text-center mt-20 text-red-500 text-lg">
        Order not found.
      </div>
    );
  }

  return (
    <DashboardLayout>
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 to-purple-100 py-10 px-4 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl min-w-xl p-6 flex flex-col h-[70vh]">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-indigo-600 hover:underline font-medium"
        >
          ← Back
        </button>

        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          Order Details
        </h2>

        <div className='grid grid-cols-2'>
        <SimpleField label="Order ID" value={order.id} />
        <SimpleField
          label="Status"
          value={
            <span className={`font-semibold ${
              order.status === 'Completed' ? 'text-green-600' :
              order.status === 'failed' ? 'text-red-500' :
              'text-yellow-600'
            }`}>
              {order.status}
            </span>
          }
        />
        <SimpleField label="Customer Name" value={order.customerName} />
        <SimpleField label="Email" value={order.email || 'N/A'} />
        <SimpleField label="Phone" value={order.phone || 'N/A'} />
        <SimpleField label="Amount" value={`$${order.amount}`} />
        </div>

        <h3 className="mt-6 text-lg font-semibold text-indigo-700">Product Info</h3>
        <div className='grid grid-cols-2'>
        <SimpleField label="Product" value={order.product.name} />
        <SimpleField label="Type" value={order.product.planType} />
        <SimpleField label="Data" value={`${order.product.data} GB`} />
        <SimpleField label="Validity" value={`${order.product.validity} days`} />
        <SimpleField label="Region" value={order.product.region || 'Global'} />
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}

function SimpleField({ label, value }) {
  return (
    <div className="mb-4 flex">
      <label className="block text-md text-gray-600 mr-1">{label}  -</label>
      <div className="text-base font-medium text-gray-800">{value}</div>
    </div>
  );
}
