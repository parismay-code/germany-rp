/* global alt */
import * as React from 'react';

import Clothes from "./components/Clothes";
import MainInventory from "./components/MainInventory";
import Weapons from "./components/Weapons";
import Quick from "./components/Quick";
import Bag from "./components/Bag";
import Context from "./components/Context";

import './Inventory.scss';

const Inventory = (props) => {
    const [bagStatus, setBagStatus] = React.useState(false);

    const [isDragging, setIsDragging] = React.useState(false);
    const [draggedCell, setDraggedCell] = React.useState();
    const [targetCell, setTargetCell] = React.useState();

    React.useEffect(() => {
        if (props.inventoryData[8].data.count > 0) setBagStatus(true);
        else setBagStatus(false);
    }, [props.inventoryData])

    return <div
        className='inventory'
        onMouseUp={() => {
            setIsDragging(false);
        }}
    >
        <Clothes
            inventoryData={props.inventoryData}
            draggedCell={draggedCell}
            setDraggedCell={setDraggedCell}
            targetCell={targetCell}
            setTargetCell={setTargetCell}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
        />
        <div className='inventory__main'>
            <MainInventory
                inventoryData={props.inventoryData.filter(el => el.data.type !== 'weapon' && el.position > 10)}
                draggedCell={draggedCell}
                setDraggedCell={setDraggedCell}
                targetCell={targetCell}
                setTargetCell={setTargetCell}
                isDragging={isDragging}
                setIsDragging={setIsDragging}/>
            <Weapons
                inventoryData={props.inventoryData.filter(el => el.data.type === 'weapon')}
                draggedCell={draggedCell}
                setDraggedCell={setDraggedCell}
                targetCell={targetCell}
                setTargetCell={setTargetCell}
                isDragging={isDragging}
                setIsDragging={setIsDragging}/>
            <Quick
                quickSlots={props.quickSlots}
            />
        </div>
        {bagStatus && <Bag
            inventoryData={props.inventoryData[8].data.inventory}
        />}
        {contextStatus && <Context
            draggedCell={draggedCell}
        />}
    </div>
}

export default Inventory;