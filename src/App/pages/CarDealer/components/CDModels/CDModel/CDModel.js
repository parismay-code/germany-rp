import * as React from 'react';
import {observer} from "mobx-react-lite";

import cn from 'classnames';

const CDModel = ({ model, setModel, el }) => {
    return <div
        className={cn('car-dealer-models-content__option', model === el.id && 'car-dealer-models-content__option_active')}
        onClick={() => setModel(el.id)}
    >
        {`${el.name} #${el.id}`}
    </div>
}

export default observer(CDModel);