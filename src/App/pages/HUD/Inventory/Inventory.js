/* global alt */
import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {useLocalStore} from "@utils/hooks/useLocal";

import Clothes from "./components/Clothes";
import MainInventory from "./components/MainInventory";

import close from '@assets/images/close.svg';

import InventoryStore from "@store/InventoryStore";

import './Inventory.scss';

const Inventory = () => {
    const store = useLocalStore(() => new InventoryStore());

    const fetchInventoryDataEvent = React.useCallback((json) => {
        try {
            const inventoryData = JSON.parse(json);

            return {
                isError: false,
                data: inventoryData
            }
        } catch (e) {
            console.log(e);
            return {
                isError: true,
                data: null
            }
        }
    }, []);

    React.useEffect(() => {
        if ('alt' in window) {
            alt.on('cef::inventory:loadData', (json) => store.fetchInventoryData(fetchInventoryDataEvent(json)));
        }
    }, [store, fetchInventoryDataEvent]);

    return <div className='inventory'>
        <div className='inventory-content'>
            <Clothes store={store}/>
            <MainInventory store={store}/>
            <img
                className='inventory-content__exit'
                src={close}
                alt='#'
                onClick={() => {
                    if ('alt' in window) {
                        alt.emit('client::inventory:close');
                    }
                }}
            />
        </div>
    </div>
}

export default observer(Inventory);