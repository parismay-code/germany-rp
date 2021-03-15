import './HouseInfo.scss';

const HouseInfo = (props) => {
    return <div className='house-info'>
        <div className='house-info__title'>Price/day</div>
        <div className='house-info__subtitle'>{props.price}</div>
        <div className='house-info__title'>Family name</div>
        <div className='house-info__subtitle'>{props.family}</div>
        <div className='house-info__title'>Garage spaces</div>
        <div className='house-info__subtitle'>{props.garage}</div>
        <div className='house-info__title'>Garden</div>
        <div className='house-info__subtitle'>{props.garden}</div>
        <div className='house-info__title'>Days paid</div>
        <div className='house-info__subtitle'>{props.daysPaid}</div>
    </div>
}

export default HouseInfo;