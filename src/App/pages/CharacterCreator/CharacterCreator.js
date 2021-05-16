/* global alt */
import * as React from 'react';
import {useLocalStore} from "@utils/hooks/useLocal";
import {observer} from "mobx-react-lite";

import CCNavigation from "./components/CCNavigation";
import PlayerInfo from "./menus/PlayerInfo";
import FaceFeatures from "./menus/FaceFeatures";
import Hair from "./menus/Hair";

import gendersIcon from '@assets/images/cCreator/gendersIcon.svg';
import faceFeaturesIcon from '@assets/images/cCreator/faceFeaturesIcon.svg';
import hairIcon from '@assets/images/cCreator/hairIcon.svg';
import close from '@assets/images/close.svg';

import CreatorStore from "@store/CreatorStore";

import './CharacterCreator.scss';

const CharacterCreator = () => {
    const store = useLocalStore(() => new CreatorStore());

    const [currentPage, setCurrentPage] = React.useState(0);

    const testPalette = React.useMemo(() => [
        '#1C1B19',
        '#2E2926',
        '#40312C',
        '#39201B',
        '#603024',
        '#572019',
        '#844C31',
        '#82553E',
        '#81573E',
        '#845C43',
        '#957252',
        '#A38560',
        '#AC8B57',
        '#A78558',
        '#8E6A4A',
        '#713E2B',
        '#732F26',
        '#65191B',
        '#731B19',
        '#B04222',
        '#98482F',
        '#9C412A',
        '#897164',
        '#9D8678'
    ], []);

    return <div className='character-creator'>
        <div className='character-creator__menu'>
            <CCNavigation
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                gender={store.creatorData.player.gender}
                icon={currentPage === 0 ? gendersIcon : currentPage === 1 ? faceFeaturesIcon : hairIcon}
            />
            {currentPage === 0 && <PlayerInfo
                store={store}
                palette={testPalette}
            />}
            {currentPage === 1 && <FaceFeatures
                store={store}
            />}
            {currentPage === 2 && <Hair
                store={store}
                palette={testPalette}
            />}
        </div>
        <img className='character-creator__exit' src={close} alt='#' onClick={() => {
            if ('alt' in window) {
                alt.emit('client::component:close');
            }
        }}/>
        <div className='character-creator__create'>Charakter erstellen</div>
    </div>
}

export default observer(CharacterCreator);