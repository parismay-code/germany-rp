import * as React from 'react';
import {observer} from "mobx-react-lite";

import {regExp} from "@utils/regExp";

import './CDPrice.scss';

const CDPrice = ({ model, carsList }) => {

    const price = React.useMemo(() =>
        `$${String(carsList.filter(el => el.id === model)[0].Price).replace(regExp.money, '$1 ')}`, [carsList, model])

    return <div className='car-dealer-price'>
        Price<br/>{price}
    </div>
}

export default observer(CDPrice);