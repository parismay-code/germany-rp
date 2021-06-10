/* global alt */
import * as React from 'react';
import {observer} from 'mobx-react-lite';

import Components      from './components/Components';
import ProductElements from './components/ProductElements';
import ShopTexture     from './components/ShopTexture';
import ShopPrice       from './components/Price';

import close      from '@assets/images/close.svg';
import creditCard from '@assets/images/creditCard.svg';
import geld       from '@assets/images/geld.svg';

import './ClothesShop.scss';

const ClothesShop = ({store}) => {
	const [item, setItem] = React.useState(0),
		[texture, setTexture] = React.useState(0),
		[currentComponent, setComponent] = React.useState('tops');
	
	const fetchClothesShopDataEvent = React.useCallback((json) => {
		try {
			const clothesShopData = JSON.parse(json);
			
			return {
				isError: false,
				data: clothesShopData,
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
			alt.emit('client::clothesShop:preview', {
				component: store.clothesShopData.filter(el => el.category === currentComponent)[item]?.component,
				drawable: store.clothesShopData.filter(el => el.category === currentComponent)[item]?.drawable,
				texture: store.clothesShopData.filter(el => el.category === currentComponent)[item]?.textures[texture]
			});
		}
	}, [item, texture, currentComponent, store.clothesShopData]);
	React.useEffect(() => {
		setTexture(0);
	}, [item]);
	React.useEffect(() => setItem(0), [currentComponent]);
	
	React.useEffect(() => {
		if ('alt' in window) {
			alt.on('cef::clothesShop:setData', json => store.fetchClothesShopData(fetchClothesShopDataEvent(json)));
		}
	}, [fetchClothesShopDataEvent, store]);
	
	return <div className="clothes-shop">
		<div className="clothes-shop-menu">
			<div className="clothes-shop-menu__header">clothes shop</div>
			<Components
				store={store}
				currentComponent={currentComponent}
				setComponent={setComponent}
			/>
			<ProductElements currentComponent={currentComponent} item={item} setItem={setItem} store={store}/>
			<ShopTexture
				store={store}
				texture={texture}
				setTexture={setTexture}
				item={item}
				currentComponent={currentComponent}
			/>
			<ShopPrice price={store.clothesShopData.filter(el => el.category === currentComponent)[item]?.price}/>
		</div>
		<img
			className="clothes-shop__exit"
			src={close}
			alt="#"
			onClick={() => {
				if ('alt' in window) {
					alt.emit('client::component:close');
				}
			}}
		/>
		<div className="clothes-shop-buy">
			<div
				className="clothes-shop-buy-element shop-buy-element_card"
				onClick={() => {
					if ('alt' in window) {
						alt.emit('client::clothesShop:buy', {
							component: store.clothesShopData.filter(el => el.category === currentComponent)[item]?.component,
							drawable: store.clothesShopData.filter(el => el.category === currentComponent)[item]?.drawable,
							texture: store.clothesShopData.filter(el => el.category === currentComponent)[item]?.textures[texture]
						}, 0);
					}
				}}>
				<span className="clothes-shop-buy-element__text">Mit karte bezahlen</span>
				<img className="clothes-shop-buy-element__image" src={creditCard} alt="#"/>
			</div>
			<div
				className="clothes-shop-buy-element clothes-shop-buy-element_geld"
				onClick={() => {
					if ('alt' in window) {
						alt.emit('client::clothesShop:buy', {
							component: store.clothesShopData.filter(el => el.category === currentComponent)[item]?.component,
							drawable: store.clothesShopData.filter(el => el.category === currentComponent)[item]?.drawable,
							texture: store.clothesShopData.filter(el => el.category === currentComponent)[item]?.textures[texture]
						}, 1);
					}
				}}>
				<span className="clothes-shop-buy-element__text">Verkaufen</span>
				<img className="clothes-shop-buy-element__image" src={geld} alt="#"/>
			</div>
		</div>
	</div>;
};

export default observer(ClothesShop);