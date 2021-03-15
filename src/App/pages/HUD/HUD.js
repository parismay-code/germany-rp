/* global alt */

import {useState} from 'react';
import useForceUpdate from "../../utils/hooks/useForceUpdate";

import Inventory2 from './Inventory2';
import ATM from "./ATM";
import FuelStation from "./FuelStation";
import House from "./House";
import Hotel from "./Hotel";

import inventoryData from '../../store/inventory2/inventory2';
import quick from "../../store/inventory2/quick";
import houseData from "../../store/house/houseData";
import hotelData from "../../store/hotel/hotelData";

const HUD = () => {
    const [currentComponent, setCurrentComponent] = useState('inventory');
    const [_inventoryData, setInventoryData] = useState(inventoryData)
    const [_houseData, setHouseData] = useState(houseData);
    const [_hotelData, setHotelData] = useState(hotelData);

    const forceUpdate = useForceUpdate();

    const renderHudComponent = () => {
        switch (currentComponent) {
            case 'inventory':
                return (<Inventory2
                    inventoryData={_inventoryData}
                    quickSlots={quick}
                />);
            case 'atm':
                return <ATM/>
            case 'fuelStation':
                return <FuelStation/>
            case 'house':
                return <House houseData={_houseData} />
            case 'hotel':
                return <Hotel hotelData={_hotelData} />
            default:
                return <></>
        }
    }

    if ('alt' in window) {
        alt.on('client::hud:setNewComponent', (string) => {
            switch (string) {
                case 'inventory':
                    setCurrentComponent('inventory');
                    break;
                case 'atm':
                    setCurrentComponent('atm');
                    break;
                case 'fuelStation':
                    setCurrentComponent('fuelStation');
                    break;
                case 'house':
                    setCurrentComponent('house');
                    break;
                case 'hotel':
                    setCurrentComponent('hotel');
                    break;
                default:
                    break;
            }
        })

        alt.on('client::hud:sendInventoryData', (array) => {
            setInventoryData(array);
        })

        alt.on('client::hud:sendHouseData', (obj) => {
            setHouseData(obj);
        })

        alt.on('client::hud:sendHotelData', (obj) => {
            setHotelData(obj);
        })

        alt.on('client::hud:update', () => {
            forceUpdate();
        })
    }

    return (
        <div className='hud'>
            {renderHudComponent()}
        </div>
    )
}

export default HUD;