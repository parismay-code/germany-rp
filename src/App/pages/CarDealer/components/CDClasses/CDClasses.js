import * as React from 'react';
import {observer} from 'mobx-react-lite';

import CDClass from './CDClass';

import bicycle     from '@assets/images/carDealer/bicycle.svg';
import motorcycle  from '@assets/images/carDealer/motorcycle.svg';
import lowrider    from '@assets/images/carDealer/lowrider.svg';
import offroad     from '@assets/images/carDealer/offroad.svg';
import suv         from '@assets/images/carDealer/suv.svg';
import standart    from '@assets/images/carDealer/standart.svg';
import sports      from '@assets/images/carDealer/sports.svg';
import supersports from '@assets/images/carDealer/supersports.svg';
import airplane    from '@assets/images/carDealer/airplane.svg';
import helicopter  from '@assets/images/carDealer/helicopter.svg';
import boat        from '@assets/images/carDealer/boat.svg';
import truck       from '@assets/images/carDealer/truck.svg';
import musclecar   from '@assets/images/carDealer/musclecar.svg';
import useful      from '@assets/images/carDealer/useful.svg';
import transport   from '@assets/images/carDealer/transport.svg';
import classic     from '@assets/images/carDealer/classic.svg';
import tuning      from '@assets/images/carDealer/tuning.svg';

import './CDClasses.scss';

const CDClasses = ({store, autoClass, setAutoClass}) => {
	return <div className="car-dealer-class">
		{store.carDealerList.filter(el => el.CategoryId === 1).length > 0 && <CDClass
			image={bicycle}
			select={1}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 2).length > 0 && <CDClass
			image={motorcycle}
			select={2}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 3).length > 0 && <CDClass
			image={lowrider}
			select={3}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 4).length > 0 && <CDClass
			image={offroad}
			select={4}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 5).length > 0 && <CDClass
			image={suv}
			select={5}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 6).length > 0 && <CDClass
			image={standart}
			select={6}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 7).length > 0 && <CDClass
			image={sports}
			select={7}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 8).length > 0 && <CDClass
			image={supersports}
			select={8}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 9).length > 0 && <CDClass
			image={airplane}
			select={9}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 10).length > 0 && <CDClass
			image={helicopter}
			select={10}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 11).length > 0 && <CDClass
			image={boat}
			select={11}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 12).length > 0 && <CDClass
			image={truck}
			select={12}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 13).length > 0 && <CDClass
			image={musclecar}
			select={13}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 14).length > 0 && <CDClass
			image={useful}
			select={14}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 15).length > 0 && <CDClass
			image={transport}
			select={15}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 16).length > 0 && <CDClass
			image={classic}
			select={16}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
		{store.carDealerList.filter(el => el.CategoryId === 17).length > 0 && <CDClass
			image={tuning}
			select={17}
			autoClass={autoClass}
			setAutoClass={setAutoClass}
		/>}
	</div>;
};

export default observer(CDClasses);