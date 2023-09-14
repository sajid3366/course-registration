
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Lists from './components/Lists/Lists'

function App() {

  const [lists, setLists] = useState([]);
  const [creditHour , setCreditHour] = useState(0);

  const handleAddToList = (list, id) => {
  
    const isSelected = lists.find(list => list.id == id);
    let newCreditHour = list.credit_hour;
    console.log(newCreditHour);

    if(isSelected){
      return alert('Already selected');
    }
    else{
      lists.forEach(item =>{
        newCreditHour = creditHour + item.credit_hour;
        console.log(item.credit_hour);
        setCreditHour(newCreditHour)

      });
      console.log(newCreditHour);
      setLists ([...lists, list]);

    }
    
    // const newCreditHour = creditHour +


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
        ></Lists>

      </div>





    </div>
  )
}

export default App
