/* global alt */
import * as React from 'react';
import {observer} from 'mobx-react-lite';

import CDClasses    from './components/CDClasses';
import CDModels     from './components/CDModels';
import CDParameters from './components/CDParameters';
import CDColor      from './components/CDColor';
import CDPrice      from './components/CDPrice';

import close      from '@assets/images/close.svg';
import creditCard from '@assets/images/creditCard.svg';
import geld       from '@assets/images/geld.svg';

import './CarDealer.scss';
import cn from "classnames";
import checked from "@assets/images/auth/checked.svg";

const CarDealer = ({store}) => {
	const [autoClass, setAutoClass] = React.useState(0);
	const [model, setModel] = React.useState(0);
	const [color, setColor] = React.useState(0);
	const [garage, setGarage] = React.useState(false);

	const fetchCarsEvent = React.useCallback((json) => {
		try {
			const carsList = JSON.parse(json);
			setAutoClass(carsList[0].CategoryId);
			setModel(carsList[0].Id);
			
			return {
				isError: false,
				data: carsList,
			};
		} catch (e) {
			console.log(e);
			return {
				isError: true,
				data: null,
			};
		}
	}, []);
	
	React.useEffect(() => {
		if ('alt' in window) {
			alt.emit('client::carDealer:preview', model, color);
		}
	}, [model, color]);
	
	React.useEffect(() => {
		if ('alt' in window) {
			alt.on('cef::carDealer:sendCarsData', (data) => {
				store.fetchCarDealerList(fetchCarsEvent(data));
			});
		}
	}, [store, fetchCarsEvent]);
	
	const testPalette = React.useMemo(() => [
		'#0d1116',
		'#fffff6',
		'#E10A0A',
		'#f78616',
		'#fbe212',
		'#16C30E',
		'#0b9cf1',
		'#3b39e0',
		'#c21cab',
	], []);
	
	return <div className="car-dealer">
		<div className="car-dealer-menu">
			<div className="car-dealer-menu__header">Fahrzeughändler</div>
			<CDClasses
				store={store}
				autoClass={autoClass}
				setAutoClass={setAutoClass}
			/>
			<CDModels
				autoClass={autoClass}
				model={model}
				setModel={setModel}
				store={store}
			/>
			<CDParameters
				model={model}
				store={store}
			/>
			<CDColor
				color={color}
				setColor={setColor}
				palette={testPalette}
			/>
			<CDPrice
				model={model}
				store={store}
			/>
		</div>
		<div className="car-dealer-rotate">
			<input className="car-dealer-rotate__input" type="range" name="n_carDealerRotate" min="0" max="3.6" step="0.01"
			       onChange={(e) => {
				       if ('alt' in window) {
					       alt.emit('client::carDealer:rotate', Number(e.target.value));
				       }
			       }}/>
		</div>
		<img className="car-dealer__exit" src={close} alt="#" onClick={() => {
			if ('alt' in window) {
				alt.emit('client::component:close');
			}
		}}/>

		<div className="car-dealer-buy">
			<div
				className={cn('car-dealer-buy-garage__checkbox', garage && 'car-dealer-buy-garage__checkbox_checked')}
				onClick={() => {
					setGarage(!garage);

					if ('alt' in window) {
						alt.emit('cef::carDealer:sendGarage', (!garage))
					}
				}}
			>
				<img src={checked} alt='#' />
			</div>
			<span className='car-dealer-buy-garage__sendGarage'>In Garage liefern</span>
			<div
				className="car-dealer-buy-element car-dealer-buy-element_card"
				onClick={() => {
					if ('alt' in window) {
						alt.emit('client::carDealer:buy', model, color, 0);
					}
				}}>
				<span className="car-dealer-buy-element__text">Mit Karte bezahlen</span>
				<img className="car-dealer-buy-element__image" src={creditCard} alt="#"/>
			</div>

			<div
				className="car-dealer-buy-element car-dealer-buy-element_geld"
				onClick={() => {
					if ('alt' in window) {
						alt.emit('client::carDealer:buy', model, color, 1);
					}
				}}>
				<span className="car-dealer-buy-element__text">Bar bezahlen</span>
				<img className="car-dealer-buy-element__image" src={geld} alt="#"/>
			</div>
		</div>
	</div>;
};

export default observer(CarDealer);