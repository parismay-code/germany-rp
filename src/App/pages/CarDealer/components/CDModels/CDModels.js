import * as React from 'react';
import {observer} from "mobx-react-lite";

import CDModel from "./CDModel";

import './CDModels.scss';

const CDModels = ({ autoClass, model, setModel, carsList }) => {
    return <div className='car-dealer-models'>
        <div className='car-dealer-models__title'>Select model car</div>
        <div className='car-dealer-models-content'>
            {carsList.filter(el => el.type === autoClass).map((el, key) => {
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