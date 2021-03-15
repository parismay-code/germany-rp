// eslint-disable-next-line no-unused-vars
/* global alt */

import './inventoryBag.scss';

const InventoryBag = (props) => {
    return (
        <div className='inventory-bag'>
            <div className='inventory-bag-header'>
                <span className='inventory-bag-header__title'>Bag</span>
                <span className='inventory-bag-header__kg' id='id_bagKg'>
                    {`${props.bagWeight}kg`}
                </span>
                <span className='inventory-bag-header__slots' id='id_bagSlots'>
                    {`${props.bagCount}/${props.bagSlots.length}`}
                </span>
            </div>
            <div className='inventory-bag-slots'>
                {props.bagSlots.map((el, key) => {
                    if (el.item !== undefined) {
                        return (
                            <div key={`bag${key}`} id={`id_bagSlot${key}`} className='inventory-bag-slots__slot not-blank'>
                                <img src={el.item} alt='#' />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={`bag${key}`} id={`id_bagSlot${key}`} className='inventory-bag-slots__slot' />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default InventoryBag;