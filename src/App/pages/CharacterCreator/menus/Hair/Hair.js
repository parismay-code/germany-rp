import {useState} from 'react';

import CCHairOption from "../../components/CCHairOption";
import CCColor from "../../components/CCColor";

import hairData from "../../../../store/cCreator/hairData";

const Hair = (props) => {
    const [currentHair, setCurrentHair] = useState(0);

    const colorManager = () => {
        switch (currentHair) {
            case 0:
                return <CCColor
                    title='Color'
                    palette={props.palette}
                    color={props.headHairColor}
                    setColor={props.setHeadHairColor}
                />
            case 1:
                return <CCColor
                    title='Color'
                    palette={props.palette}
                    color={props.eyebrowsColor}
                    setColor={props.setEyebrowsColor}
                />
            case 2:
                return <CCColor
                    title='Color'
                    palette={props.palette}
                    color={props.chestHairColor}
                    setColor={props.setChestHairColor}
                />
            case 3:
                return <CCColor
                    title='Color'
                    palette={props.palette}
                    color={props.beardColor}
                    setColor={props.setBeardColor}
                />
            default:
                return <></>;
        }
    }

    return <>
        {props.creatorData.appearance.hair.map((el, key) => {
            return <CCHairOption
                key={key}
                title={el.title}
                el={el}
                id={key}
                data={hairData[key].types}
                event={setCurrentHair}
                creatorData={props.creatorData}
            />
        })}
        {colorManager()}
    </>
}

export default Hair;