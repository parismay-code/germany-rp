import ProductTypeElement from "./ProductTypeElement";

import food from '../../../../assets/images/shop/food.svg';
import drink from '../../../../assets/images/shop/drink.svg';
import misc from '../../../../assets/images/shop/misc.svg';

import './ProductType.scss';

const ProductType = (props) => {
    return <div className='product-type'>
        <ProductTypeElement image={food} currentType='food' type={props.type} setType={props.setType}/>
        <ProductTypeElement image={drink} currentType='drink' type={props.type} setType={props.setType}/>
        <ProductTypeElement image={misc} currentType='misc' type={props.type} setType={props.setType}/>
    </div>
}

export default ProductType;