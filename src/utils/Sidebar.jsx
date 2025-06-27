import { Link } from 'react-router-dom';
import { useDashboard } from '../appContext/DashboardContext';
import { MdViewModule } from "react-icons/md";
import { FaBorderAll } from "react-icons/fa";

export default function Sidebar() {
    const { selected, setSelected } = useDashboard();

    return (
        // <aside className="w-64 flex-shrink-0 flex flex-col items-center bg-slate-100 shadow-md p-6 border-r border-gray-200">
        //     <nav className="space-y-4 text-lg">
        //         <Link
        //             to={`/dashboard`}
        //             className={`block hover:text-indigo-600 hover:cursor-pointer ${selected === 'products' ? 'text-indigo-600' : 'text-gray-700'}`}
        //             onClick={() => setSelected('products')}
        //         >
        //             <MdViewModule className='inline mb-1' /> Products
        //         </Link>
        //         <Link
        //             to={'/dashboard'}
        //             className={`block hover:text-indigo-600 hover:cursor-pointer ${selected === 'orders' ? 'text-indigo-600' : 'text-gray-700'}`}
        //             onClick={() => setSelected('orders')}
        //         >
        //             <FaBorderAll className='inline h-4' /> Orders
        //         </Link>
        //     </nav>
        // </aside>

        <aside className="w-64 min-h-screen flex-shrink-0 flex flex-col bg-gradient-to-b from-indigo-50 via-white to-purple-50 shadow-lg border-r border-indigo-100 p-6">
  {/* Sidebar Header */}
  <div className="text-2xl font-bold text-indigo-700 mb-10 tracking-wide">
    Dashboard
  </div>

  {/* Navigation */}
  <nav className="space-y-3 text-base font-medium w-full">
    <Link
      to="/dashboard"
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
        selected === 'products'
          ? 'bg-indigo-100 text-indigo-700 font-semibold shadow-sm'
          : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
      }`}
      onClick={() => setSelected('products')}
    >
      <MdViewModule className="text-lg" />
      Products
    </Link>

    <Link
      to="/dashboard"
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
        selected === 'orders'
          ? 'bg-indigo-100 text-indigo-700 font-semibold shadow-sm'
          : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
      }`}
      onClick={() => setSelected('orders')}
    >
      <FaBorderAll className="text-sm" />
      Orders
    </Link>
  </nav>

  {/* Optional Footer or Actions */}
  <div className="mt-auto pt-6 text-sm text-gray-500">
    <p className="text-center">© 2025 YourApp</p>
  </div>
</aside>

    );
}