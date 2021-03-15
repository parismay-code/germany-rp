import Header from "../Header";

import './Weapons.scss';
import Cell from "../Cell";

const Weapons = (props) => {
    const weaponsWeight = props.inventoryData.reduce((acc, el) => {
        return acc + el.data.weight;
    }, 0);

     return <div className='main-weapons'>
         <Header
             title='Weapons'
             weight={weaponsWeight}
             slots={props.inventoryData.length}
             notBlank={props.inventoryData.filter(el => el.visual.thumb !== undefined).length}
         />
         <div className='main-weapons__slots'>
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

export default Weapons;