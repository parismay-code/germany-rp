import * as React from 'react';
import {observer} from "mobx-react-lite";

import {regExp} from "@utils/regExp";

import './CDPrice.scss';

const CDPrice = ({ autoClass, model, carsList }) => {

    const price = React.useMemo(() =>
        `$${String(carsList[autoClass].cars[model].price).replace(regExp.money, '$1 ')}`, [autoClass, carsList, model])

    return <div className='car-dealer-price'>
        Price<br/>{price}
    </div>
}

export default observer(CDPrice);