import PropTypes from 'prop-types';

const List = ({list}) => {
    const {title}=list;
    return (
        <div className='text-[#1C1B1B99]'>
            
            <ul>
                <li>{title}</li>
            </ul>
            
        </div>
    );
};

List.propTypes ={
    list: PropTypes.object.isRequired
}

export default List;