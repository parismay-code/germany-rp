import cn from 'classnames';

const ShopProduct = (props) => {
    return <div
        className={cn('shop-options__option', props.item === props.id && 'car-dealer-models__option_active')}
        onClick={() => props.setItem(props.id)}
    >
        {`${props.name} #${props.id}`}
    </div>
}

export default ShopProduct;