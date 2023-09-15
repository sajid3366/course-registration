import PropTypes from 'prop-types';

const List = ({ list }) => {
    const { title } = list;
    return (
        <div className='text-[#1C1B1B99]'>


            <li className=' list-inside list-item firsti mb-1'>{title}</li>



        </div>
    );
};

List.propTypes = {
    list: PropTypes.object.isRequired,
}

export default List;