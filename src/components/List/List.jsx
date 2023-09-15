import PropTypes from 'prop-types';

const List = ({ list, idx }) => {
    const { title } = list;
    return (
        <div className='text-[#1C1B1B99]'>
            <ol>
                <li className='mb-1'>{idx+1} {title}</li>
            </ol>

        </div>
    );
};

List.propTypes = {
    list: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
}

export default List;