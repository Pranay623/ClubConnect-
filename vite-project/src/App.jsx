import { useState } from 'react';
import './App.css';
import logo from './assets/logo1.png';
import bg from './assets/eic.png';
import pfp from './assets/pfp.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="w-full h-screen p-5 flex justify-around gap-[22rem]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img src={logo} alt="App Logo" className='w-[10vw] h-[10vh] ' />
        <div className='h-[8%] mt-2 flex justify-center'>
          <ul className='flex gap-14 justify-center items-center text-white cursor-pointer font-semibold'>
            <li className="hover:text-blue-500 transition-colors">hello</li>
            <li className="hover:text-blue-500 transition-colors">hello</li>
            <li className="hover:text-blue-500 transition-colors">hello</li>
            <li className="hover:text-blue-500 transition-colors">hello</li>
          </ul>
        </div>
        <div className='flex mt-4 gap-2'>
        <img src={pfp}  className='w-[3vw] h-[4vh]' />
        <h2 className='text-white mt-2 cursor-pointer font-semibold hover:text-blue-500'>Create Account</h2>
        </div>
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-7 pointer-events-none">
  <h1 className="text-white text-4xl font-bold text-center pointer-events-auto">
    "TrueVote: Where Every Voice Shapes the Future!"
  </h1>
  <button className="mt-6 px-6 py-3 text-white border-2 border-white rounded-lg shadow-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out pointer-events-auto">
    SignIn
  </button>
</div>

        
      </div>
    </>
  );
}

export default App;
