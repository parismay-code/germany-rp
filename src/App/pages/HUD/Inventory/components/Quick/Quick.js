import './Quick.scss';
import Cell from "../Cell";

const Quick = (props) => {
    return <div className='main-quick'>
        <span className='main-quick__header'>Quick</span>
        <div className='main-quick__slots'>
            {props.quickSlots.map((el, key) => {
                return <Cell
                    key={key}
                    position={el.position}
                    hotkey={el.position}
                    thumb={el.visual.thumb}
                />
            })}
        </div>
        <div className='main-quick__bottom'/>
    </div>
}

export default Quick;