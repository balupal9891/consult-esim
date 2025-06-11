import DashboardLayout from '../layout/DashbaordLayout';
import ProductsPage from './ProductsPage';
import OrdersPage from './OrdersPage';
import { useDashboard } from '../appContext/DashboardContext';

export default function DashboardPage() {
    const { selected, setSelected } = useDashboard();

    return (
        <DashboardLayout>
            {selected === 'products' && <ProductsPage setSelected={setSelected} />}
            {selected === 'orders' && <OrdersPage />}
        </DashboardLayout>
    );
}