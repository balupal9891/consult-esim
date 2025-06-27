import DashboardLayout from '../layout/DashbaordLayout';
import ProductsPage from './ProductsPage';
import OrdersPage from './OrdersPage';
import { useDashboard } from '../appContext/DashboardContext';
import CountryPlanSelectorCard from '../utils/CountryPlanSelectorCard';
import { useProducts } from '../appContext/ProductContext';
import { useState } from 'react';

export default function DashboardPage() {

    const [selectedCountry, setSelectedCountry] = useState(null)
    const countries = [
        { "name": "USA", "iso2": "US", "emoji": "🇺🇸", "phone_code": "1" },
        { "name": "India", "iso2": "IN", "emoji": "🇮🇳", "phone_code": "91" },
        { "name": "China", "iso2": "CN", "emoji": "🇨🇳", "phone_code": "86" },
        { "name": "United Kingdom", "iso2": "GB", "emoji": "🇬🇧", "phone_code": "44" },
        { "name": "Germany", "iso2": "DE", "emoji": "🇩🇪", "phone_code": "49" },
        { "name": "France", "iso2": "FR", "emoji": "🇫🇷", "phone_code": "33" },
        { "name": "Canada", "iso2": "CA", "emoji": "🇨🇦", "phone_code": "1" },
        { "name": "Japan", "iso2": "JP", "emoji": "🇯🇵", "phone_code": "81" },
        { "name": "South Korea", "iso2": "KR", "emoji": "🇰🇷", "phone_code": "82" },
        { "name": "Australia", "iso2": "AU", "emoji": "🇦🇺", "phone_code": "61" },
        { "name": "Brazil", "iso2": "BR", "emoji": "🇧🇷", "phone_code": "55" },
        { "name": "Mexico", "iso2": "MX", "emoji": "🇲🇽", "phone_code": "52" },
        { "name": "Russia", "iso2": "RU", "emoji": "🇷🇺", "phone_code": "7" },
        { "name": "Italy", "iso2": "IT", "emoji": "🇮🇹", "phone_code": "39" },
        { "name": "Spain", "iso2": "ES", "emoji": "🇪🇸", "phone_code": "34" },
        { "name": "Netherlands", "iso2": "NL", "emoji": "🇳🇱", "phone_code": "31" },
        { "name": "Turkey", "iso2": "TR", "emoji": "🇹🇷", "phone_code": "90" },
        { "name": "Saudi Arabia", "iso2": "SA", "emoji": "🇸🇦", "phone_code": "966" },
        { "name": "United Arab Emirates", "iso2": "AE", "emoji": "🇦🇪", "phone_code": "971" },
        { "name": "South Africa", "iso2": "ZA", "emoji": "🇿🇦", "phone_code": "27" },
        { "name": "Singapore", "iso2": "SG", "emoji": "🇸🇬", "phone_code": "65" },
        { "name": "Malaysia", "iso2": "MY", "emoji": "🇲🇾", "phone_code": "60" },
        { "name": "Indonesia", "iso2": "ID", "emoji": "🇮🇩", "phone_code": "62" },
        { "name": "Vietnam", "iso2": "VN", "emoji": "🇻🇳", "phone_code": "84" },
        { "name": "Thailand", "iso2": "TH", "emoji": "🇹🇭", "phone_code": "66" },
        { "name": "Philippines", "iso2": "PH", "emoji": "🇵🇭", "phone_code": "63" },
        { "name": "Egypt", "iso2": "EG", "emoji": "🇪🇬", "phone_code": "20" },
        { "name": "Nigeria", "iso2": "NG", "emoji": "🇳🇬", "phone_code": "234" },
        { "name": "Argentina", "iso2": "AR", "emoji": "🇦🇷", "phone_code": "54" },
        { "name": "Pakistan", "iso2": "PK", "emoji": "🇵🇰", "phone_code": "92" }
    ]


    return (
        <DashboardLayout>

            <div className='flex flex-col overflow-auto w-full'>

                <div className="max-w-4xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">
                        🌍 Select Your Country
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {countries?.map((country) => (
                            <button
                                key={country.iso2}
                                onClick={() => setSelectedCountry(country)}
                                className={`flex items-center gap-3 border rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition ${selectedCountry?.iso2 === country.iso2
                                    ? "bg-indigo-600 text-white font-semibold"
                                    : "bg-white text-gray-800"
                                    }`}
                            >
                                <span className="text-xl">{country.emoji}</span>
                                <span className="text-sm">{country.name}</span>
                            </button>
                        ))}
                    </div>

                    {(
                        <div className="mt-6 text-center">
                            {selectedCountry && <p className="text-gray-700">
                                You selected <strong>{selectedCountry?.name}</strong> {selectedCountry?.emoji}
                            </p>}
                            {
                                !selectedCountry && <p className="text-gray-700">
                                Please select a country
                            </p>
                            }
                        </div>
                    )} 

                </div>

                {!!selectedCountry && <CountryPlanSelectorCard country={selectedCountry} />}
            </div>
        </DashboardLayout>
    );
}