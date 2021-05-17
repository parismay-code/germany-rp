import * as React from 'react';
import {observer} from "mobx-react-lite";

import CDModel from "./CDModel";

import './CDModels.scss';

const CDModels = ({ autoClass, model, setModel, store }) => {
    return <div className='car-dealer-models'>
        <div className='car-dealer-models__title'>Wählen Sie ein Modell</div>
        <div className='car-dealer-models-content'>
            {store.carDealerList.filter(el => el.CategoryId === autoClass).map((el, key) => {
                return <CDModel
                    key={key}
                    model={model}
                    setModel={setModel}
                    el={el}
                />
            })}
        </div>
    </div>
}

export default observer(CDModels);