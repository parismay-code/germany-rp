import './TuningPrice.scss';
import shopData from "../../../../store/shop/shopData";

const TuningPrice = (props) => {
    const regExp = {
        money: /(\d)(?=(\d{3})+(\D|$))/g
    }

    let price = String(shopData[props.item].price);

    price = `$${price.replace(regExp.money, '$1 ')}`

    return <div className='tuning-price'>
        Price<br/>{price}
    </div>
}

export default TuningPrice;