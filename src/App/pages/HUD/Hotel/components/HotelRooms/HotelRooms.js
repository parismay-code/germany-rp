/* global alt */
import * as React from 'react';
import {observer} from 'mobx-react-lite';

import './HotelRooms.scss';

const HotelRooms = ({store}) => {
	return <div className='hotel-rooms'>
		{store.hotelData.rooms.map((el, key) => {
			return <div key={key} className='hotel-rooms-element'>
				<div className='hotel-rooms-element__title'>{el.category} Zimmer</div>
				<div className='hotel-rooms-element-content'>
					<div className='hotel-rooms-element-content-info'>
						<div className='hotel-rooms-element-content-info__price'>{el.price}$ / Stunde</div>
						<div
							className='hotel-rooms-element-content-info__cancel'
							 onClick={() => {
								 if ('alt' in window) {
									 alt.emit('client::hotel:cancelroom', el.id);
								 }
							 }}
						>Auschecken</div>
					</div>
					<div className='hotel-rooms-element-content-buttons'>
						<div
							className='hotel-rooms-element-content-buttons__lock'
							onClick={() => {
								if ('alt' in window) {
									alt.emit('client::hotel:lockRoom', el.id, !el.isLocked);
								}
								el.isLocked = !el.isLocked;
							}}
						>{el.isLocked ? 'verriegelt' : 'geöffnet'}</div>
						<div
							className='hotel-rooms-element-content-buttons__enter'
							onClick={() => {
								if ('alt' in window) {
									alt.emit('client::hotel:enterRoom', el.id);
								}
							}}
						>Betreten</div>
					</div>
				</div>
			</div>
		})}
	</div>
}

export default observer(HotelRooms);