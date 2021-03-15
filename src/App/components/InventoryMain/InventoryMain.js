// eslint-disable-next-line no-unused-vars
/* global alt */

import {useEffect} from 'react';
import useForceUpdate from "../../utils/hooks/useForceUpdate";

import './inventoryMain.scss';

let draggedCell, targetCell, isDragging;

const InventoryMain = (props) => {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        for (let i = 0; i < props.mainSlots.inventory.length; i++) {
            if (props.mainSlots.inventory[i].item !== undefined) {
                const el = document.getElementById(`id_invMainCell${i}`);
                const currContainer = document.getElementById(`id_invMainSlot${i}`)
                const containers = props.mainSlots.inventory;

                const moveAt = (event) => {
                    el.style.left = `${event.pageX - el.offsetWidth}px`;
                    el.style.top = `${event.pageY - el.offsetHeight}px`;
                }

                el.onmousedown = (e) => {
                    isDragging = true;
                    draggedCell = i;
                    let draggedImg = containers[i].item;

                    el.style.position = 'absolute';
                    moveAt(e);
                    document.body.appendChild(el);
                    el.style.zIndex = '1000';

                    document.onmousemove = (_e) => {
                        moveAt(_e);
                    }

                    document.onmouseup = () => {
                        if (draggedCell !== targetCell) {
                            containers[draggedCell].item = containers[targetCell].item;
                            containers[targetCell].item = draggedImg;
                        }

                        console.log(`dragged: ${draggedCell}`, `target: ${targetCell}`)

                        currContainer.appendChild(el);
                        el.style.left = '0';
                        el.style.top = '0';
                        el.style.position = 'relative';

                        draggedCell = undefined;
                        targetCell = undefined
                        draggedImg = undefined;
                        isDragging = false;

                        forceUpdate();

                        document.onmousemove = null;
                        el.onmouseup = null;
                    }
                }
            }
        }
    })

    return (
        <div className='inventory-main'>
            <div className='inventory-main__bottom'/>
            <div className='inventory-main-inv-header'>
                <span className='inventory-main-inv-header__title'>Inventory</span>
                <span className='inventory-main-inv-header__kg' id='id_invMainKg'>
                    {`${props.inventoryWeight}kg`}
                </span>
                <span className='inventory-main-inv-header__slots' id='id_invMainSlots'>
                    {`${props.inventoryCount}/${props.mainSlots.inventory.length}`}
                </span>
            </div>
            <div className='inventory-main-slots'>
                {props.mainSlots.inventory.map((el, key) => {
                    return (
                        <div
                            key={`inv${key}`}
                            id={`id_invMainSlot${key}`}
                            className='inventory-main-slots__slot'
                            onMouseOver={() => {
                                if (isDragging) targetCell = key;
                            }}
                        >
                            <div
                                className='inventory-main-slots__slot-img'
                                id={`id_invMainCell${key}`}
                            >{
                                el.item === undefined ? <></> :
                                    <img
                                        src={el.item}
                                        alt='#'
                                    />
                            }
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='inventory-main-weapons-header'>
                <span className='inventory-main-weapons-header__title'>Weapon</span>
                <span className='inventory-main-weapons-header__kg' id='id_invMainKg'>
                    {`${props.weaponWeight}kg`}
                </span>
                <span className='inventory-main-weapons-header__slots' id='id_invMainSlots'>
                    {`${props.weaponCount}/${props.mainSlots.weapons.length}`}
                </span>
            </div>
            <div className='inventory-main-slots'>
                {props.mainSlots.weapons.map((el, key) => {
                    if (el.item !== undefined) {
                        return (
                            <div key={`weapon${key}`} id={`id_invWeaponSlot${key}`}
                                 className='inventory-main-slots__slot not-blank'>
                                <img src={el.item} alt='#'/>
                            </div>
                        )
                    } else {
                        return (
                            <div key={`weapon${key}`} id={`id_invWeaponSlot${key}`}
                                 className='inventory-main-slots__slot'/>
                        )
                    }
                })}
            </div>
            <div className='inventory-main-quick-header'>Quick</div>
            <div className='inventory-main-slots'>
                {props.mainSlots.quick.map((el, key) => {
                    if (el.item !== undefined) {
                        return (
                            <div key={`quick${key}`} id={`id_invQuickSlot${key}`}
                                 className='inventory-main-slots__slot not-blank'>
                                <img src={el.item} alt='#'/>
                                <div className='inventory-main-slots__slot-quick'>
                                    <span>{key}</span>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={`quick${key}`} id={`id_invQuickSlot${key}`}
                                 className='inventory-main-slots__slot'>
                                <div className='inventory-main-slots__slot-quick'>
                                    <span>{key}</span>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default InventoryMain;