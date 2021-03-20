import * as React from 'react';

import ProductTypeElement from "./ProductTypeElement";

import food from '@assets/images/shop/food.svg';
import drink from '@assets/images/shop/drink.svg';
import misc from '@assets/images/shop/misc.svg';

import './ProductType.scss';

const ProductType = ({ type, setType }) => {
    return <div className='product-type'>
        <ProductTypeElement image={food} currentType='food' type={type} setType={setType}/>
        <ProductTypeElement image={drink} currentType='drink' type={type} setType={setType}/>
        <ProductTypeElement image={misc} currentType='misc' type={type} setType={setType}/>
    </div>
}

export default React.memo(ProductType);