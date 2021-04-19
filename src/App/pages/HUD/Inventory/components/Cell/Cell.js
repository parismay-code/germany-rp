import * as React from 'react';
import {observer} from "mobx-react-lite";

import './Cell.scss';

const Cell = ({cell, defaultThumb}) => {
    const thumb = React.useMemo(() => {
        if (cell?.visual?.thumb) return cell.visual.thumb;
        else if (defaultThumb) return defaultThumb;
        else return null;
    }, [cell, defaultThumb]);

    return <div className='inventory-cell'>
        {thumb ? <img className='inventory-cell__img' src={thumb} alt='#'/> : null}
    </div>
}

export default observer(Cell);