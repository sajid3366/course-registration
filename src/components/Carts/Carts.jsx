import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Cart from "../Cart/Cart";

const Carts = ({handleAddToList}) => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    },[])

    return (
        <div className="md:w-3/4 mt-4 grid grid-cols-3 pb-8">
            {
                carts.map(cart => <Cart 
                    key={cart.id}
                    cart={cart}
                    handleAddToList={handleAddToList}
                    ></Cart>)
            }

        </div>
    );
};


Carts.propTypes ={
    handleAddToList: PropTypes.func.isRequired
}

export default Carts;