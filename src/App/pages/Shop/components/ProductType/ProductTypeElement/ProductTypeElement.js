import cn from 'classnames';

const ProductTypeElement = ({ type, setType }) => {
    return <div
        className={cn('product-type__option', type === 'food' && 'product-type__option_active')}
        onClick={() => {
            setType('food');
        }}
    >
        <img src='#' alt='#'/>
    </div>
}

export default ProductTypeElement;