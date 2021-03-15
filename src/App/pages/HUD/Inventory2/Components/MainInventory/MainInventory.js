import Header from "../Header";
import Cell from "../Cell";

import './MainInventory.scss';

const MainInventory = (props) => {
    const inventoryWeight = props.inventoryData.reduce((acc, el) => {
        return acc + el.data.weight;
    }, 0);

    return <div className='main-inventory'>
        <Header
            title='Inventory'
            weight={inventoryWeight}
            slots={props.inventoryData.length}
            notBlank={props.inventoryData.filter(el => el.data.type !== undefined).length}
        />
        <div className='main-inventory__slots'>
            {props.inventoryData.map((el, key) => {
                return <Cell
                    key={key}
                    position={el.position}
                    thumb={el.visual.thumb}
                    isDragging={props.isDragging}
                    setIsDragging={props.setIsDragging}
                    targetCell={props.targetCell}
                    setTargetCell={props.setTargetCell}
                    draggedCell={props.draggedCell}
                    setDraggedCell={props.setDraggedCell}
                />
            })}
        </div>
    </div>
}

export default MainInventory;