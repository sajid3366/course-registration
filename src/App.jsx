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


  const notify = () => {
    return toast('Already selected', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const notifyCreditHour =()=>{
    return toast('Insufficient credit hour', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  }

  const handleAddToList = (list, id) => {

    const isSelected = lists.find(list => list.id == id);
    let totalCreditHour = list.credit_hour;

    let totalPrice = list.price;


    if (isSelected) {
      notify();

    }
    else {
      lists.forEach(item => {
        totalCreditHour = totalCreditHour + item.credit_hour;
        totalPrice = totalPrice + item.price;

      });
      const totalCreditRemaining = 20 - totalCreditHour;


      if (totalCreditRemaining < 0) {
        notifyCreditHour();

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
          notify={notify}
          notifyCreditHour={notifyCreditHour}

        ></Carts>

        <Lists
          lists={lists}
          handleAddToList={handleAddToList}
          price={price}
          creditHour={creditHour}
          creditRemaining={creditRemaining}

        ></Lists>


      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />



    </div>
  )
}

export default App
