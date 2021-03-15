import './HotelBuy.scss';

const HotelBuy = (props) => {
    return <div className='hotel-buy'>
        <div className='hotel-buy__price'>
            Price<br/>{props.price}
        </div>
        <div className='hotel-buy__button' onClick={props.event}>Rent</div>
    </div>
}

export default HotelBuy;