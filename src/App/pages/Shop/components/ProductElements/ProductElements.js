import ShopProduct from "./ShopProduct";

import shopData from "../../../../store/shop/shopData";

import './ProductElements.scss';

const ProductElements = (props) => {
    return <div className='shop-options'>
        <div className='shop-options__title'>Select product</div>
        {shopData.map((el, key) => {
            return <ShopProduct
                item={props.item}
                setItem={props.setItem}
                key={key}
                name={el.name}
                id={el.id}
            />
        })}
    </div>
}

export default ProductElements;