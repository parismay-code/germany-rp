/* global alt */
import * as React      from 'react';
import {useLocalStore} from '@utils/hooks/useLocal';

import Inventory   from './Inventory';
import ATM         from './ATM';
import FuelStation from './FuelStation';
import House       from './House';
import Hotel       from './Hotel';

import HUDStore from '@store/HUDStore';

const HUD = () => {
	const store = useLocalStore(() => new HUDStore());
	
	const [currentComponent, setCurrentComponent] = React.useState('inventory');
	
	React.useEffect(() => {
		if ('alt' in window) {
			alt.on('cef::hud:setNewComponent', (string) => {
				switch (string) {
					case 'inventory':
						return setCurrentComponent('inventory');
					case 'atm':
						return setCurrentComponent('atm');
					case 'fuelStation':
						return setCurrentComponent('fuelStation');
					case 'house':
						return setCurrentComponent('house');
					case 'hotel':
						return setCurrentComponent('hotel');
					default:
						return setCurrentComponent(null);
				}
			});
		}
	}, []);
	
	return (
		<div className="hud">
			{currentComponent === 'inventory' && <Inventory/>}
			{currentComponent === 'atm' && <ATM/>}
			{currentComponent === 'fuelStation' && <FuelStation/>}
			{currentComponent === 'house' && <House store={store}/>}
			{currentComponent === 'hotel' && <Hotel store={store}/>}
		</div>
	);
};

export default React.memo(HUD);