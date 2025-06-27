import './App.css';
import Header from './components/Header';
import { useNavigate } from 'react-router-dom';
import { useUser } from './appContext/UserContext';

function App() {
  const navigate = useNavigate();
  const { user } = useUser();
  if (!user) {
    navigate('/login');
  }

  return (

    <div className="App font-sans bg-white">
      {/* Hero Section */}
      <section className="min-h-[85vh] bg-gradient-to-r from-indigo-600 to-blue-600 text-white flex items-center px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Travel Smart with <span className="text-yellow-300">eSIM</span>
            </h1>
            <p className="text-lg">
              Activate instantly. Stay connected anywhere. No physical SIM needed.
            </p>
            <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
              Get Your eSIM Now
            </button>
          </div>
          <div>
            <img
              src="esim.jpg"
              alt="eSIM visual"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose eSIM */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose eSIM?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-lg text-gray-700">
            <p>✅ <strong>Instant Activation</strong> – No waiting for physical SIM delivery.</p>
            <p>🌍 <strong>Travel-Friendly</strong> – Easily switch networks while abroad.</p>
            <p>📶 <strong>Dual SIM Support</strong> – Use both physical and eSIM together.</p>
            <p>🔒 <strong>Secure & Reliable</strong> – No risk of SIM card damage or loss.</p>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-slate-100 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">🌐 Where Can You Use It?</h2>
          <ul className="space-y-4 text-xl text-gray-800">
            <li>🌍 150+ Countries with Global Coverage</li>
            <li>🏝 Regional Packs: Asia, Europe, Middle East, etc.</li>
            <li>📅 Short-Term or Long-Term Travel Plans</li>
          </ul>
        </div>
      </section>

      {/* Optional Footer / CTA */}
      <footer className="bg-indigo-700 text-white py-10">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Go eSIM?</h3>
          <button className="bg-yellow-400 text-indigo-800 px-6 py-2 font-semibold rounded-full hover:bg-yellow-300 transition">
            Explore Plans
          </button>
        </div>
      </footer>
    </div>

  );
}

export default App;
