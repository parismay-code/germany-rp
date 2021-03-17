import * as React from 'react';
import {observer} from "mobx-react-lite";

import CCGender from "../../components/CCGender";
import CCName from "../../components/CCName";
import CCParents from "../../components/CCParents";
import CCColor from "../../components/CCColor";

const PlayerInfo = ({ store, palette }) => {
    return <>
        <CCGender
            gender={store.creatorData.player.gender}
            changeGender={store.changeGender}
        />
        <CCName
            nickname={store.creatorData.player.nickname}
            changeNickname={store.changeNickname}
        />
        <CCParents
            parents={store.creatorData.parents}
            changeParents={store.changeParents}
            changeParentsMix={store.changeParentsMix}
        />
        <CCColor
            title='Body Color'
            palette={palette}
            type='body'
            color={store.creatorData.appearance.color}
            changeColor={store.changeColor}
        />
    </>
}

export default observer(PlayerInfo);