import * as React from 'react';
import {observer} from "mobx-react-lite";

import Cell from "../Cell";
import Weapons from "./components/Weapons";
import Quick from "./components/Quick";

import './MainInventory.scss';

const MainInventory = ({store}) => {
    const weight = React.useMemo(() => store.inventoryData.reduce((accumulator, el) => accumulator + el.data.weight, 0), [store.inventoryData]);
    const count = React.useMemo(() => store.inventoryData.reduce((accumulator, el) => accumulator + el.data.count, 0), [store.inventoryData]);

    return <div className='inventory-main'>
        <div className='inventory-main-header'>
            <div className='inventory-main-header__title'>Inventory</div>
            <div className='inventory-main-header__weight'>{weight}kg</div>
            <div className='inventory-main-header__count'>{`${count}/${store.inventoryData.length}`}</div>
        </div>
        <div className='inventory-main-content'>
            {store.inventoryData.map((el, key) => {
                return <Cell key={key} cell={el}/>
            })}
        </div>
        <Weapons store={store}/>
        <Quick store={store}/>
    </div>
}

export default observer(MainInventory);