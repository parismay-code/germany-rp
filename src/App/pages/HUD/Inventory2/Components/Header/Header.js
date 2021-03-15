import './Header.scss';

const Header = (props) => {
    return <div className='inventory-header'>
        <span className='inventory-header__title'>{props.title}</span>
        <span className='inventory-header__weight'>{`${props.weight}kg`}</span>
        <span className='inventory-header__slots'>{`${props.notBlank}/${props.slots}`}</span>
    </div>
}

export default Header;