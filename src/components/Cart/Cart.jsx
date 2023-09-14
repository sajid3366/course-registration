import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';



const Cart = ({ cart, handleAddToList }) => {
    const { id, title, image, description, price, credit_hour } = cart;
    return (
        <div className='w-[300px] h-[400px] bg-white mb-6 rounded-lg p-4'>
            <img className='w-full' src={image} alt="" />
            <h3 className='mt-4 mb-3  text-lg font-semibold '>{title}</h3>
            <p className='text-[#1C1B1B99] mb-5'>{description}</p>
            <div className='flex justify-between mb-6 text-[#1C1B1B99]'>

                <div className='flex items-center gap-3'>
                    <FaDollarSign className='text-black'></FaDollarSign>
                    <p> Price: {price}</p>
                </div>
                <p>Credit: {credit_hour}hr</p>
            </div>
            <button onClick={() =>handleAddToList(cart, id)} className=' w-full h-10 rounded-lg font-semibold text-lg text-white bg-[#2F80ED]'>Select</button>

        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    handleAddToList: PropTypes.func.isRequired
}

export default Cart;