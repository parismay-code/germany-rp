import * as React from 'react';
import {observer} from 'mobx-react-lite';

import ComponentsElement from './ComponentsElement';

import glasses from '@assets/images/clothesShop/glasses.svg';
import gloves from '@assets/images/clothesShop/gloves.svg';
import hat from '@assets/images/clothesShop/hat.svg';
import pants from '@assets/images/clothesShop/pants.svg';
import ring from '@assets/images/clothesShop/ring.svg';
import shoes from '@assets/images/clothesShop/shoes.svg';
import top from '@assets/images/clothesShop/top.svg';
import tShirt from '@assets/images/clothesShop/tShirt.svg';
import watch from '@assets/images/clothesShop/watch.svg';

import './Components.scss';

const Components = ({store, currentComponent, setComponent}) => {
	return <div className="clothes-shop-component">
		{store.clothesShopData.filter(el => el.category === 'tops').length > 0 && <ComponentsElement
			select={'tops'}
			icon={top}
			currentComponent={currentComponent}
			setComponent={setComponent}
		/>}
		{store.clothesShopData.filter(el => el.category === 'tShirts').length > 0 && <ComponentsElement
			select={'tShirts'}
			icon={tShirt}
			currentComponent={currentComponent}
			setComponent={setComponent}
		/>}
		{store.clothesShopData.filter(el => el.category === 'pants').length > 0 && <ComponentsElement
			select={'pants'}
			icon={pants}
			currentComponent={currentComponent}
			setComponent={setComponent}
		/>}
		{store.clothesShopData.filter(el => el.category === 'glasses').length > 0 && <ComponentsElement
			select={'glasses'}
			icon={glasses}
			currentComponent={currentComponent}
			setComponent={setComponent}
		/>}
		{store.clothesShopData.filter(el => el.category === 'watches').length > 0 && <ComponentsElement
			select={'watches'}
			icon={watch}
			currentComponent={currentComponent}
			setComponent={setComponent}
		/>}
		{store.clothesShopData.filter(el => el.category === 'shoes').length > 0 && <ComponentsElement
			select={'shoes'}
			icon={shoes}
			currentComponent={currentComponent}
			setComponent={setComponent}
		/>}
		{store.clothesShopData.filter(el => el.category === 'hats').length > 0 && <ComponentsElement
			select={'hats'}
			icon={hat}
			currentComponent={currentComponent}
			setComponent={setComponent}
		/>}
		{store.clothesShopData.filter(el => el.category === 'gloves').length > 0 && <ComponentsElement
			select={'gloves'}
			icon={gloves}
			currentComponent={currentComponent}
			setComponent={setComponent}
		/>}
		{store.clothesShopData.filter(el => el.category === 'accessories').length > 0 && <ComponentsElement
			select={'accessories'}
			icon={ring}
			currentComponent={currentComponent}
			setComponent={setComponent}
		/>}
	</div>;
};

export default observer(Components);