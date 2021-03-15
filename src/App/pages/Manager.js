/* global alt */
import * as React from 'react';
import {useLocalStore} from "@utils/hooks/useLocal";
import {observer} from "mobx-react-lite";

import HUD from "./HUD";
import Auth from "./Auth";
import CharacterCreator from "./CharacterCreator";
import CarDealer from "./CarDealer";
import Tuning from "./Tuning";
import Shop from "./Shop";

import GlobalStore from "@store/GlobalStore";

const Manager = () => {
    const globalStore = useLocalStore(() => new GlobalStore());

    const [currentPage, setCurrentPage] = React.useState('carDealer');

    React.useEffect(() => {
        if ('alt' in window) {
            alt.on('cef::manager:setNewPage', (page) => setCurrentPage(page))
        }
    }, [])

    return <>
        {currentPage === 'auth' && <Auth/>}
        {currentPage === 'carDealer' && <CarDealer/>}
        {currentPage === 'characterCreator' && <CharacterCreator/>}
        {currentPage === 'hud' && <HUD/>}
        {currentPage === 'tuning' && <Tuning/>}
        {currentPage === 'shop' && <Shop/>}
    </>
}

export default observer(Manager);