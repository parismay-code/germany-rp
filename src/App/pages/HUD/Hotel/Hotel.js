/* global alt */
import * as React from 'react';
import {observer} from "mobx-react-lite";

import HotelInfo from "./components/HotelInfo";
import HotelHeader from "./components/HotelHeader";
import HotelOption from "./components/HotelOption";
import HotelBuy from "./components/HotelBuy";

import {regExp} from "@utils/regExp";

import './Hotel.scss';

const Hotel = ({ store }) => {
    const [roomType, setRoomType] = React.useState(0);

    const rentRoom = React.useCallback(() => {
        if ('alt' in window) {
            alt.emit('client::hotel:rent', store.hotelData.id, roomType);
        }
    }, [store.hotelData.id, roomType]);

    const hotelPrice = React.useMemo(() => `$${String(store.hotelData.price).replace(regExp.money, '$1 ')}`, [store.hotelData.price]);

    return <div className='hotel'>
        <HotelInfo />
        <div className='hotel__main'>
            <HotelHeader id={store.hotelData.id}/>
            <HotelOption
                currentOption={roomType}
                type={0}
                event={() => setRoomType(0)}
            />
            <HotelOption
                currentOption={roomType}
                type={1}
                event={() => setRoomType(1)}
            />
            <HotelOption
                currentOption={roomType}
                type={2}
                event={() => setRoomType(2)}
            />
            <HotelBuy
                price={hotelPrice}
                event={() => rentRoom()}
            />
        </div>
    </div>
}

export default observer(Hotel);