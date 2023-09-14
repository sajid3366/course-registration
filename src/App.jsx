
import './App.css'
import Carts from './components/Carts/Carts'
import Lists from './components/Lists/Lists'

function App() {

  

  return (
    <div className='bg-[#F3F3F3]'>
      
      <h1 className='text-5xl text-center p-8 font-semibold'>Course Registration</h1>
      <div className='md:flex m-auto max-w-7xl'>
      <Carts></Carts>
      <Lists></Lists>

      </div>
      

      
      
      
    </div>
  )
}

export default App
