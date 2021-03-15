import './HouseBuy.scss';

const HouseBuy = (props) => {
    return <div className='house-buy'>
        <div className='house-buy__price'>
            Price<br/>{props.price}
        </div>
        <div className='house-buy__button' onClick={props.event}>Buy</div>
    </div>
}

export default HouseBuy;