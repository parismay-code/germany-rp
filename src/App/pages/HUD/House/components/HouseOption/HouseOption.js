import './HouseOption.scss';

const HouseOption = (props) => {
    return <div className='house-option' onClick={props.event}>
        <span className='house-option__text'>
            {`${props.locked ? 'Open' : 'Lock'} ${props.target}`}
        </span>
    </div>
}

export default HouseOption;