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
        />
        <CCName nickname={store.creatorData.player.nickname}/>
        <CCParents
            mother={store.creatorData.parents.mother}
            father={store.creatorData.parents.father}
            mix={store.creatorData.parents.mix}
        />
        <CCColor
            title='Body Color'
            palette={palette}
            color={store.creatorData.appearance.color.body}
        />
    </>
}

export default observer(PlayerInfo);