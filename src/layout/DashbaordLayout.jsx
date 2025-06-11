import Sidebar from '../utils/Sidebar';

export default function DashboardLayout({ children }) {
    return (
        <div className="flex flex-col overflow-hidden" style={{ height: 'calc(100vh - 4rem)' }}>
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto bg-white">
                    {children}
                </main>
            </div>
        </div>
    );
}