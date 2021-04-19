import * as React from 'react';
import {observer} from "mobx-react-lite";

import './Weapons.scss';

const Weapons = ({store}) => {
    const weaponsList = React.useMemo(() => store.inventoryData.filter(el => el.type === 'weapon'), [store.inventoryData]);

    const weight = React.useMemo(() => weaponsList.reduce((accumulator, el) => accumulator + el.data.weight, 0), [weaponsList]);

    return <div className='inventory-weapons'>
        <div className='inventory-weapons-header'>
            <div className='inventory-weapons-header__title'>Weapons</div>
            <div className='inventory-weapons-header__weight'>{weight}kg</div>
            <div className='inventory-weapons-header__count'>{`${weaponsList.length}/4`}</div>
        </div>
        <div className='inventory-weapons-content'>
            <div className='inventory-weapons-content__element inventory-weapons-content__element_heavy'>
                heavy
            </div>
            <div className='inventory-weapons-content__element inventory-weapons-content__element_pistol'>
                pistol
            </div>
            <div className='inventory-weapons-content__element inventory-weapons-content__element_melee'>
                melee
            </div>
            <div className='inventory-weapons-content__element inventory-weapons-content__element_taser'>
                taser
            </div>
        </div>
    </div>
}

export default observer(Weapons);