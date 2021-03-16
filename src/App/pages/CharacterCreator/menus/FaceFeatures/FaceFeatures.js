import * as React from 'react';
import {observer} from "mobx-react-lite";

import CCOption from "../../components/CCOption";

const FaceFeatures = ({ store }) => {
    return <>
        {store.creatorData.faceFeatures.map((el, key) => {
            return <CCOption key={key} el={el}/>
        })}
        {store.creatorData.limitations.map((el, key) => {
            return <CCOption key={key} el={el}/>
        })}
    </>
}

export default observer(FaceFeatures);