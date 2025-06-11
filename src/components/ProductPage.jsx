import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../appContext/ProductContext';
import DashboardLayout from '../layout/DashbaordLayout';


export default function ProductPage({}) {
    const { id } = useParams();
    // const id = productId;
    const { products } = useProducts();
    const product = products.find((p) => p.id === id);

    async function handleOrder() {
        
    }

    if (!product) {
        return <div className="text-center mt-20 text-red-500">Product not found.</div>;
    }

    return (
        <>
        <DashboardLayout>
            <div className="min-h-screen bg-gray-100 py-10 px-6">
                <div className="max-w-4xl h-auto mx-auto p-6">
                    <div className="md:w-1/2 p-6 flex flex-col rounded-lg justify-between bg-slate-200">
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
                      

                        <button 
                        className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
                        onClick={handleOrder}
                        >
                            Order now
                        </button>
                    </div>

                </div>
            </div>
        </DashboardLayout>
        </>


    );
}