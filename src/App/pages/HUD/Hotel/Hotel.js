/* global alt */
import {useState} from 'react';

import HotelInfo from "./components/HotelInfo";
import HotelHeader from "./components/HotelHeader";
import HotelOption from "./components/HotelOption";
import HotelBuy from "./components/HotelBuy";

import './Hotel.scss';

const Hotel = (props) => {
    const [roomType, setRoomType] = useState(0);

    const rentRoom = () => {
        if ('alt' in window) {
            alt.emit('cef::hotel:rent', props.hotelData.id, roomType);
        }
    }

    const regExp = {
        money: /(\d)(?=(\d{3})+(\D|$))/g
    }

    let hotelPrice = String(props.hotelData.price);

    hotelPrice = `$${hotelPrice.replace(regExp.money, '$1 ')}`

    return <div className='house'>
        <HotelInfo />
        <div className='house__main'>
            <HotelHeader id={props.hotelData.id}/>
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
export default Hotel;