import * as React from 'react';
import {observer} from 'mobx-react-lite';

import {regExp} from '@utils/regExp';

import './CDPrice.scss';

const CDPrice = ({model, store}) => {
	
	const price = React.useMemo(() =>
		`$${String(store.carDealerList.filter(el => el.Id === model)[0]?.Price).replace(regExp.money, '$1 ')}`, [store.carDealerList, model]);
	
	return <div className="car-dealer-price">
		Preis<br/>{price}
	</div>;
};

export default observer(CDPrice);