import * as React from 'react';
import cn from 'classnames';

const ProductTypeElement = ({ image, type, currentType, setType }) => {
    return <div
        className={cn('product-type__option', type === currentType && 'product-type__option_active')}
        onClick={() => setType(currentType)}
    >
        <img src={image} alt='#'/>
    </div>
}

export default React.memo(ProductTypeElement);