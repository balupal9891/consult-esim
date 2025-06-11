import { Link } from 'react-router-dom';
import { useDashboard } from '../appContext/DashboardContext';

export default function Sidebar() {
    const { selected, setSelected } = useDashboard();

    return (
        <aside className="w-64 flex-shrink-0 flex flex-col items-center bg-slate-100 shadow-md p-6 border-r border-gray-200">
            <nav className="space-y-4 text-lg">
                <Link
                    to={`/dashboard`}
                    className={`block hover:text-indigo-600 hover:cursor-pointer ${selected === 'products' ? 'text-indigo-600' : 'text-gray-700'}`}
                    onClick={() => setSelected('products')}
                >
                    Products
                </Link>
                <Link
                    to={'/dashboard'}
                    className={`block hover:text-indigo-600 hover:cursor-pointer ${selected === 'orders' ? 'text-indigo-600' : 'text-gray-700'}`}
                    onClick={() => setSelected('orders')}
                >
                    Orders
                </Link>
            </nav>
        </aside>
    );
}