import './ShopPrice.scss';
import shopData from "../../../../store/shop/shopData";

const ShopPrice = (props) => {
    const regExp = {
        money: /(\d)(?=(\d{3})+(\D|$))/g
    }

    let price = String(shopData[props.item].price);

    price = `$${price.replace(regExp.money, '$1 ')}`

    return <div className='shop-price'>
        Price<br/>{price}
    </div>
}

export default ShopPrice;