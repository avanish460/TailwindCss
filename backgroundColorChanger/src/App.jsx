import { useState } from 'react'
import './App.css'

function App() {

  const [bgColor, setBgColor] = useState('bg-white');
  return (
    <div className={`relative min-h-screen ${bgColor}`}>
      <div className='absolute font-bold text-xl bottom-60 left-30 md:bottom-40 md:left-120 text-stone-800'>Background Color Changer!</div>
      <div className='absolute w-70 h-40 left-25 md:w-200 md:h-15 rounded-lg shadow-xl md:left-50 bottom-10'>
        <div className='flex justify-between flex-wrap p-5'>
        <button className='w-20 bg-red-600 p-1 rounded-xl shadow-xl cursor-pointer' onClick={ () => {
          setBgColor('bg-red-600');
        }}>Red</button>
        <button className='w-20 bg-yellow-300 p-1 rounded-xl shadow-xl cursor-pointer' onClick={ ()=> {
          setBgColor('bg-yellow-300');
        }}>Yellow</button>
        <button className='w-20 bg-black text-white p-1 rounded-xl shadow-xl cursor-pointer' onClick={ ()=>{
          setBgColor('bg-black');
        }}>Black</button>
        <button className='w-20 bg-purple-900 text-white p-1 rounded-xl shadow-xl cursor-pointer' onClick={ () => {
          setBgColor('bg-purple-900');
        }}>Purple</button>
        <button className='w-20 bg-green-900 text-white p-1 rounded-xl shadow-xl cursor-pointer' onClick={ () => {
          setBgColor('bg-green-900');
        }}>Green</button>
        <button className='w-20 bg-blue-700 p-1 rounded-xl shadow-xl cursor-pointer' onClick={ () => {
          setBgColor('bg-blue-700');
        }}>Blue</button>
        <button className='w-20 bg-white p-1 rounded-xl shadow-xl cursor-pointer' onClick={ () => {
          setBgColor('bg-white');
        }}>Default</button>
        </div>
      </div>
    </div>   
  )
}

export default App
