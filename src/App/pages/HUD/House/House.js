/* global alt */
import {useState} from 'react';

import HouseInfo from "./components/HouseInfo";
import HouseHeader from "./components/HouseHeader";
import HouseOption from "./components/HouseOption";
import HouseBuy from "./components/HouseBuy";


import './House.scss';

const House = (props) => {
    const [isHouseLocked, setIsHouseLocked] = useState(props.houseData.houseLocked);
    const [isGarageLocked, setIsGarageLocked] = useState(props.houseData.garageLocked);

    const toggleHouse = () => {
        setIsHouseLocked(!isHouseLocked);

        if ('alt' in window) {
            alt.emit('cef::house:toggleHouse', props.houseData.id, isHouseLocked);
        }
    }
    const toggleGarage = () => {
        setIsGarageLocked(!isGarageLocked);

        if ('alt' in window) {
            alt.emit('cef::house:toggleGarage', props.houseData.id, isGarageLocked);
        }
    }
    const buyHouse = () => {
        if ('alt' in window) {
            alt.emit('cef::house:buy', props.houseData.id);
        }
    }

    const regExp = {
        money: /(\d)(?=(\d{3})+(\D|$))/g
    }

    let housePrice = String(props.houseData.price),
        gardenPrice = String(props.houseData.garden);

    housePrice = `$${housePrice.replace(regExp.money, '$1 ')}`
    gardenPrice = `$${gardenPrice.replace(regExp.money, '$1 ')}`

    return <div className='house'>
        <HouseInfo
            price={housePrice}
            family={props.houseData.family}
            garage={props.houseData.garage}
            garden={gardenPrice}
            daysPaid={props.houseData.daysPaid}
        />
        <div className='house__main'>
            <HouseHeader
                id={props.houseData.id}
                locked={isHouseLocked}
            />
            <HouseOption
                target='house'
                event={() => toggleHouse()}
                locked={isHouseLocked}
            />
            <HouseOption
                target='garage'
                event={() => toggleGarage()}
                locked={isGarageLocked}
            />
            <HouseBuy
                price={housePrice}
                event={() => buyHouse()}
            />
        </div>
    </div>
}
export default House;