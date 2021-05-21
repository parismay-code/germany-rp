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

import CreatorStore from "@store/CreatorStore";

import './CharacterCreator.scss';

const CharacterCreator = () => {
    const store = useLocalStore(() => new CreatorStore());

    const [currentPage, setCurrentPage] = React.useState(0);

    const testPalette = React.useMemo(() => [
        '#080a0e', //61
        '#201f1b', //0
        '#322c26', //1
        '#2b1b14', //55
        '#3d231a', //56
        '#4c261a', //3
        '#552e1e', //57
        '#7c3b20', //4
        '#a6552b', //5
        '#ac6138', //6
        '#ab6d45', //7
        '#b17950', //8
        '#b8855b', //9
        '#ca9d6b', //10
        '#d8b37c', //11
        '#dab882', //12
        '#e3ba72', //13
        '#f2d297', //15
        '#eedac8', //29
        '#b79e88', //27
        '#ca9e6c', //63
        '#b39167', //62
        '#c55730', //24
        '#a11a12' //19
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
        <div className="character-creator-zoom">
            <input className="character-creator-zoom__input" type="range" name="n_characterCreatorZoom" min="0" max="360" step="1" defaultValue='332'
                   onChange={(e) => {
                       if ('alt' in window) {
                           alt.emit('client::characterCreator:rotation', Number(e.target.value));
                       }
                   }}/>
        </div>
        <div className='character-creator__create' onClick={(e) => {
            if ('alt' in window) {
                alt.emit('client::characterCreator:create');
            }
        }}>Charakter erstellen</div>
    </div>
}

export default observer(CharacterCreator);