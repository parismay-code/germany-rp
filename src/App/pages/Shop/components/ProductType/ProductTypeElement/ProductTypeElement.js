import cn from 'classnames';

const ProductTypeElement = (props) => {
    return <div
        className={cn('product-type__option', props.type === props.currentType && 'product-type__option_active')}
        onClick={() => {
            props.setType(props.currentType);
        }}
    >
        <img src={props.image} alt='#'/>
    </div>
}

export default ProductTypeElement;