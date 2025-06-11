import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <section className='h-[80vh]  w-full flex items-center'>
        <div className='grid grid-cols-2 gap-20 w-full'>
          <div className='max-w-xl mx-auto rounded-lg overflow-hidden ml-40'>
            <img src="esim.jpg" alt="" />
          </div>
          <div className='text-black text-lg flex flex-col gap-y-4 justify-center'>
            <h1>Why Choose eSIM?</h1>
            <p>✅ Instant Activation – No waiting for physical SIM delivery.</p>
            <p>🌍 Travel-Friendly – Switch networks easily when traveling.</p>
            <p>📶 Dual SIM Support – Use eSIM with a physical SIM for dual-network access.</p>
            <p>🔒 Secure & Reliable – Less prone to damage or loss.</p>
          </div>
        </div>
      </section>
      <section className='text-2xl text-black flex flex-col items-center justify-center gap-y-2 bg-slate-200'>
        <div className='my-8'>
          <h1 className='text-blue-600 text-4xl'>🌐 Where Can You Use It?</h1>
          <ul className='mt-6'>
            <li>🌍 Global coverage across 150+ countries</li>
            <li>🏝 Regional packs (e.g., Middle East, Asia, Europe)</li>
            <li>📅 Short-term or long-term plans based on your travel</li>
          </ul>

        </div>

      </section>
    </div>
  );
}

export default App;
