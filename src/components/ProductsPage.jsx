import { useOrders } from "../appContext/OrderContext";
import { useProducts } from "../appContext/ProductContext";
import toast from "react-hot-toast";

export default function ProductsPage({ setSelected }) {
  const { products } = useProducts();
  const { addOrder } = useOrders();

  async function handlePlaceOrder(product) {
    const response = await fetch('/product/orders/request', {
      method: 'POST',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify(product)
    })
    if(response?.status == 200){
      addOrder(response?.data);
      toast.success('Order Placed');
    }
    else{
      toast.error('Not placed Please try again');
    }
    
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.length > 0 && products.map((product, inx) => (
          <div
            key={product?.id}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition border border-gray-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">{product?.name}</h2>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Price:</span> {product?.price}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Data:</span> {product?.data}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Validity:</span> {product?.validity}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Region:</span> {product?.region}
            </p>
            <p className="text-gray-700 mb-3">
              <span className="font-medium">Type:</span> {product?.planType}
            </p>

            <button
              className="btn bg-blue-800  text-white mr-2"
              onClick={() => handlePlaceOrder(product)}
            >Place Order</button>

            {/* Modals imported using daisy ui  */}
            <button className="btn" onClick={() => document.getElementById(product?.id).showModal()}>Show Details</button>
            <dialog id={product?.id} className="modal">
              <div className="modal-box bg-white">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
                  <p className="text-indigo-600 text-xl font-semibold mb-4">Price: {product.price}</p>

                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li><strong>Data:</strong> {product.data}</li>
                    <li><strong>Region:</strong> {product.region}</li>
                    <li><strong>Validity:</strong> {product.validity}</li>
                    <li><strong>Plan Type:</strong> {product.planType}</li>
                  </ul>

                  <ul className="space-y-1 text-gray-700 text-sm">
                    <h2><strong>Country available:</strong></h2>
                    {product?.countries.map(country => (
                      <li>{country.country_name}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
}
