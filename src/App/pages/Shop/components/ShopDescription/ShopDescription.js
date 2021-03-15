import shopData from "../../../../store/shop/shopData";

import './ShopDescription.scss';

const ShopDescription = (props) => {
    return <div className='shop-description'>
        <div className='shop-description-header'>
            <div className='shop-description-header__units'>{`${shopData[props.item].satiety} units`}</div>
            <span>Satiety</span>
            <span>Food</span>
        </div>
        <div className='shop-description__text'>
            Small product description !Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum.
        </div>
    </div>
}

export default ShopDescription;