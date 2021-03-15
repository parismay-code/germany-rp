// eslint-disable-next-line no-unused-vars
/* global alt */

import man from '../../assets/images/inventory/man.svg';

import './inventoryClothes.scss';

const InventoryClothes = (props) => {
    return (
        <div className='inventory-clothes'>
            <img className='inventory-clothes__man' src={man} alt='#'/>
            <div className='inventory-clothes-top-icons'>
                {props.clothesSlots.map((el, key) => {
                        if (el.position === 'top') {
                            return (
                                <div key={key} id={`id_invClothes${el.id}`}>
                                    <img src={el.item === undefined ? el.defaultImg : el.item} alt='#'/>
                                </div>
                            )
                        }
                    }
                )}
            </div>
            <div className='inventory-clothes-right-icons'>
                {props.clothesSlots.map((el, key) => {
                        if (el.position === 'right') {
                            return (
                                <div key={key} id={`id_invClothes${el.id}`}>
                                    <img src={el.item === undefined ? el.defaultImg : el.item} alt='#'/>
                                </div>
                            )
                        }
                    }
                )}
            </div>
            <div className='inventory-clothes-left-icons'>
                {props.clothesSlots.map((el, key) => {
                        if (el.position === 'left') {
                            return (
                                <div key={key} id={`id_invClothes${el.id}`}>
                                    <img src={el.item === undefined ? el.defaultImg : el.item} alt='#'/>
                                </div>
                            )
                        }
                    }
                )}
            </div>
            <div className='inventory-clothes__bottom-platform' />
        </div>
    )
}

export default InventoryClothes;