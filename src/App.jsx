import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Lists from './components/Lists/Lists'

function App() {

  


  const [lists, setLists] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [price, setPrice] = useState(0);
  const [creditRemaining, setCreditRemaining] = useState(20);

  const handleAddToList = (list, id) => {

    const isSelected = lists.find(list => list.id == id);
    let totalCreditHour = list.credit_hour;
    console.log(list.credit_hour);

    let totalPrice = list.price;


    if (isSelected) {
      return alert('Already selected');
      const notify = () => {
        toast("Wow so easy !");
      }
    }
    else {
      lists.forEach(item => {
        totalCreditHour = totalCreditHour + item.credit_hour;
        totalPrice = totalPrice + item.price;

      });
      const totalCreditRemaining = 20 - totalCreditHour;


      if (totalCreditRemaining < 0) {
        alert('insufficient credit');

      }
      else {
        setCreditRemaining(totalCreditRemaining);
        setPrice(totalPrice);
        setCreditHour(totalCreditHour)
        setLists([...lists, list]);

      }





    }


  }




  return (
    <div className='bg-[#F3F3F3]'>

      <h1 className='text-5xl text-center p-8 font-semibold'>Course Registration</h1>
      <div className='md:flex m-auto max-w-7xl'>
        <Carts
          handleAddToList={handleAddToList}

        ></Carts>

        <Lists
          lists={lists}
          handleAddToList={handleAddToList}
          price={price}
          creditHour={creditHour}
          creditRemaining={creditRemaining}

        ></Lists>
        <ToastContainer />

      </div>





    </div>
  )
}

export default App
