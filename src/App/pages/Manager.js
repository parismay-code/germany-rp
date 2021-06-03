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

import ShopsStore from "@store/ShopsStore";
import Dealer from "@pages/Dealer/Dealer";

const Manager = () => {
    const shopStore = useLocalStore(() => new ShopsStore())

    const [currentPage, setCurrentPage] = React.useState(null);

    React.useEffect(() => {
        if ('alt' in window) {
            alt.on('cef::manager:setNewPage', (page) => setCurrentPage(page));
        }
    }, [shopStore])

    return <>
        {currentPage === 'auth' && <Auth/>}
        {currentPage === 'carDealer' && <CarDealer store={shopStore}/>}
        {currentPage === 'characterCreator' && <CharacterCreator/>}
        {currentPage === 'hud' && <HUD/>}
        {currentPage === 'tuning' && <Tuning store={shopStore}/>}
        {currentPage === 'shop' && <Shop store={shopStore}/>}
        {currentPage === 'dealer' && <Dealer store={shopStore}/>}
    </>
}

export default observer(Manager);