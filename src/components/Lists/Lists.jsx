import List from "../List/List";
import PropTypes from 'prop-types';


const Lists = ({ lists, price, creditHour, creditRemaining }) => {
    
    

    return (
        <div className="md:w-1/4 ml-4 mt-4 bg-white rounded-lg p-6">
            <div>
                <h1 className="text-[#2F80ED] text-lg font-bold">Credit Hour Remaining {creditRemaining} hr</h1>
                <hr className="my-4" />
                <h2 className='text-xl font-bold mb-5'>Course Name</h2>
            </div>
            <div>
                {
                    lists.map(list => <List key={list.id} list={list}></List>)
                }
                <hr className="mt-6 mb-4" />
                <h3 className="text-[#1C1B1BCC] font-medium">Total Credit Hour : {creditHour}</h3>
                <hr className="my-4" />
                <h3 className="text-[#1C1B1BCC] font-semibold">Total Price : {price} USD</h3>

            </div>


        </div>
    );
};

Lists.propTypes = {
    lists: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    creditHour: PropTypes.number.isRequired,
    creditRemaining: PropTypes.number.isRequired
    
}

export default Lists;