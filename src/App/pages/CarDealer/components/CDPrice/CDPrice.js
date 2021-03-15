import carsData from "../../../../store/carDealer/carsData";

import './CDPrice.scss';

const CDPrice = (props) => {

    const regExp = {
        money: /(\d)(?=(\d{3})+(\D|$))/g
    }

    let price = String(carsData[props.autoClass].cars[props.model].price);

    price = `$${price.replace(regExp.money, '$1 ')}`

    return <div className='car-dealer-price'>
        Price<br/>{price}
    </div>
}

export default CDPrice;