/* global alt */
import * as React from 'react';
import {observer} from "mobx-react-lite";

import HouseInfo from "./components/HouseInfo";
import HouseHeader from "./components/HouseHeader";
import HouseOption from "./components/HouseOption";
import HouseBuy from "./components/HouseBuy";

import {regExp} from "@utils/regExp";

import './House.scss';

const House = ({ store }) => {
    const toggleHouse = React.useCallback(() => {
        store.toggleHouseLock(0);

        if ('alt' in window) {
            alt.emit('client::house:toggleHouse', store.houseData.id, store.houseData.houseLocked);
        }
    }, [store])

    const toggleGarage = React.useCallback(() => {
        store.toggleHouseLock(1);

        if ('alt' in window) {
            alt.emit('client::house:toggleGarage', store.houseData.id, store.houseData.garageLocked);
        }
    }, [store])

    const price = React.useMemo(() =>
        `$${String(store.houseData.price).replace(regExp.money, '$1 ')}`, [store.houseData.price]);

    const garden = React.useMemo(() =>
        `$${String(store.houseData.garden).replace(regExp.money, '$1 ')}`, [store.houseData.garden]);

    return <div className='house'>
        <HouseInfo
            price={price}
            family={store.houseData.family}
            garage={store.houseData.garage}
            garden={garden}
            daysPaid={store.houseData.daysPaid}
        />
        <div className='house__main'>
            <HouseHeader
                id={store.houseData.id}
                locked={store.houseData.houseLocked}
            />
            <HouseOption
                target='house'
                event={() => toggleHouse()}
                locked={store.houseData.houseLocked}
            />
            <HouseOption
                target='garage'
                event={() => toggleGarage()}
                locked={store.houseData.garageLocked}
            />
            <HouseBuy
                price={price}
            />
        </div>
    </div>
}
export default observer(House);