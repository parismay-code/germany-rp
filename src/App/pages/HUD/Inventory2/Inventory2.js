/* global alt */
import {useState, useEffect} from 'react';

import Clothes from "./Components/Clothes";
import MainInventory from "./Components/MainInventory";
import Weapons from "./Components/Weapons";
import Quick from "./Components/Quick";
import Bag from "./Components/Bag";
import Context from "./Components/Context";

import './Inventory.scss';

const Inventory2 = (props) => {
    const [bagStatus, setBagStatus] = useState(false);
    const [contextStatus, setContextStatus] = useState(false);

    const [isDragging, setIsDragging] = useState(false);
    const [draggedCell, setDraggedCell] = useState();
    const [targetCell, setTargetCell] = useState();

    // const rightClickEvent = (e) => {
    //     e.preventDefault();
    //
    //     setContextStatus(!contextStatus);
    // }

    useEffect(() => {
        if (props.inventoryData[8].data.count > 0) setBagStatus(true);
        else setBagStatus(false);
    }, [props.inventoryData])

    return <div
        className='inventory-2'
        // onContextMenu={(e) => rightClickEvent(e)}
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
        <div className='inventory-2__main'>
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

export default Inventory2;