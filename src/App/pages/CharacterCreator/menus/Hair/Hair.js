import * as React from 'react';
import {observer} from 'mobx-react-lite';

import CCHairOption from "../../components/CCHairOption";
import CCColor from "../../components/CCColor";

const Hair = ({ store, palette }) => {
    const [currentHair, setCurrentHair] = React.useState(0);

    const hairData = React.useMemo(() => [
        ['1', '2', '3', '4'], // head
        ['1', '2', '3', '4', '5'], // eyebrows
        ['1', '2', '3', '4', '5', '6'], // chest
        ['1', '2', '3', '4', '5', '6', '7'], // beard
    ], []);

    return <>
        {store.creatorData.appearance.hair.map((el, key) => {
            return <CCHairOption
                key={key}
                el={el}
                id={key}
                data={hairData[key]}
                setCurrentHair={setCurrentHair}
                changeHair={store.changeHair}
            />
        })}
        {currentHair === 0 && <CCColor
            title='Color'
            palette={palette}
            type='headHair'
            color={store.creatorData.appearance.color}
            changeColor={store.changeColor}
        />}
        {currentHair === 1 && <CCColor
            title='Color'
            palette={palette}
            type='eyebrows'
            color={store.creatorData.appearance.color}
            changeColor={store.changeColor}
        />}
        {currentHair === 2 && <CCColor
            title='Color'
            palette={palette}
            type='chestHair'
            color={store.creatorData.appearance.color}
            changeColor={store.changeColor}
        />}
        {currentHair === 3 && <CCColor
            title='Color'
            palette={palette}
            type='beard'
            color={store.creatorData.appearance.color}
            changeColor={store.changeColor}
        />}
    </>
}

export default observer(Hair);