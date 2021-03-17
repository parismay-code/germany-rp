import * as React from 'react';
import {observer} from "mobx-react-lite";

import CCOption from "../../components/CCOption";

import './FaceFeatures.scss';

const FaceFeatures = ({ store }) => {
    return <div className='face-features'>
        <div className='face-features__content'>
            {store.creatorData.faceFeatures.map((el, key) => {
                return <CCOption
                    key={key}
                    el={el}
                    changeOption={store.changeFaceFeatures}
                />
            })}
            {store.creatorData.limitations.map((el, key) => {
                return <CCOption
                    key={key}
                    el={el}
                    changeOption={store.changeFaceFeatures}
                />
            })}
        </div>
    </div>
}

export default observer(FaceFeatures);