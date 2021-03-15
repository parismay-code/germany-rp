import Cell from "../Cell";

import man from '../../../../../assets/images/inventory/man.svg'

import './Clothes.scss';

const Clothes = (props) => {
    return <div className='clothes'>
        <div className='clothes-content'>
            <img src={man} alt='#' className='clothes__man'/>
            <div className='clothes__top'>
                <Cell
                    position={props.inventoryData[0].position}
                    defaultThumb={props.inventoryData[0].visual.defaultThumb}
                    thumb={props.inventoryData[0].visual.thumb}
                    isDragging={props.isDragging}
                    setIsDragging={props.setIsDragging}
                    targetCell={props.targetCell}
                    setTargetCell={props.setTargetCell}
                    draggedCell={props.draggedCell}
                    setDraggedCell={props.setDraggedCell}
                />
            </div>
            <div className='clothes__right'>
                <Cell
                    position={props.inventoryData[1].position}
                    defaultThumb={props.inventoryData[1].visual.defaultThumb}
                    thumb={props.inventoryData[1].visual.thumb}
                    isDragging={props.isDragging}
                    setIsDragging={props.setIsDragging}
                    targetCell={props.targetCell}
                    setTargetCell={props.setTargetCell}
                    draggedCell={props.draggedCell}
                    setDraggedCell={props.setDraggedCell}
                />
                <Cell
                    position={props.inventoryData[2].position}
                    defaultThumb={props.inventoryData[2].visual.defaultThumb}
                    thumb={props.inventoryData[2].visual.thumb}
                    isDragging={props.isDragging}
                    setIsDragging={props.setIsDragging}
                    targetCell={props.targetCell}
                    setTargetCell={props.setTargetCell}
                    draggedCell={props.draggedCell}
                    setDraggedCell={props.setDraggedCell}
                />
                <Cell
                    position={props.inventoryData[3].position}
                    defaultThumb={props.inventoryData[3].visual.defaultThumb}
                    thumb={props.inventoryData[3].visual.thumb}
                    isDragging={props.isDragging}
                    setIsDragging={props.setIsDragging}
                    targetCell={props.targetCell}
                    setTargetCell={props.setTargetCell}
                    draggedCell={props.draggedCell}
                    setDraggedCell={props.setDraggedCell}
                />
                <Cell
                    position={props.inventoryData[4].position}
                    defaultThumb={props.inventoryData[4].visual.defaultThumb}
                    thumb={props.inventoryData[4].visual.thumb}
                    isDragging={props.isDragging}
                    setIsDragging={props.setIsDragging}
                    targetCell={props.targetCell}
                    setTargetCell={props.setTargetCell}
                    draggedCell={props.draggedCell}
                    setDraggedCell={props.setDraggedCell}
                />
                <Cell
                    position={props.inventoryData[5].position}
                    defaultThumb={props.inventoryData[5].visual.defaultThumb}
                    thumb={props.inventoryData[5].visual.thumb}
                    isDragging={props.isDragging}
                    setIsDragging={props.setIsDragging}
                    targetCell={props.targetCell}
                    setTargetCell={props.setTargetCell}
                    draggedCell={props.draggedCell}
                    setDraggedCell={props.setDraggedCell}
                />
            </div>
            <div className='clothes__left'>
                <Cell
                    position={props.inventoryData[6].position}
                    defaultThumb={props.inventoryData[6].visual.defaultThumb}
                    thumb={props.inventoryData[6].visual.thumb}
                    isDragging={props.isDragging}
                    setIsDragging={props.setIsDragging}
                    targetCell={props.targetCell}
                    setTargetCell={props.setTargetCell}
                    draggedCell={props.draggedCell}
                    setDraggedCell={props.setDraggedCell}
                />
                <Cell
                    position={props.inventoryData[7].position}
                    defaultThumb={props.inventoryData[7].visual.defaultThumb}
                    thumb={props.inventoryData[7].visual.thumb}
                    isDragging={props.isDragging}
                    setIsDragging={props.setIsDragging}
                    targetCell={props.targetCell}
                    setTargetCell={props.setTargetCell}
                    draggedCell={props.draggedCell}
                    setDraggedCell={props.setDraggedCell}
                />
                <Cell
                    position={props.inventoryData[8].position}
                    defaultThumb={props.inventoryData[8].visual.defaultThumb}
                    thumb={props.inventoryData[8].visual.thumb}
                    isDragging={props.isDragging}
                    setIsDragging={props.setIsDragging}
                    targetCell={props.targetCell}
                    setTargetCell={props.setTargetCell}
                    draggedCell={props.draggedCell}
                    setDraggedCell={props.setDraggedCell}
                />
                <Cell
                    position={props.inventoryData[9].position}
                    defaultThumb={props.inventoryData[9].visual.defaultThumb}
                    thumb={props.inventoryData[9].visual.thumb}
                    isDragging={props.isDragging}
                    setIsDragging={props.setIsDragging}
                    targetCell={props.targetCell}
                    setTargetCell={props.setTargetCell}
                    draggedCell={props.draggedCell}
                    setDraggedCell={props.setDraggedCell}
                />
                <Cell
                    position={props.inventoryData[10].position}
                    defaultThumb={props.inventoryData[10].visual.defaultThumb}
                    thumb={props.inventoryData[10].visual.thumb}
                    isDragging={props.isDragging}
                    setIsDragging={props.setIsDragging}
                    targetCell={props.targetCell}
                    setTargetCell={props.setTargetCell}
                    draggedCell={props.draggedCell}
                    setDraggedCell={props.setDraggedCell}
                />
            </div>
            <div className='clothes__bottom-platform'/>
        </div>
    </div>
}

export default Clothes;