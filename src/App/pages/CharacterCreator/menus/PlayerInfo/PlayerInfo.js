import CCGender from "../../components/CCGender";
import CCName from "../../components/CCName";
import CCParents from "../../components/CCParents";
import CCColor from "../../components/CCColor";

const PlayerInfo = (props) => {
    return <>
        <CCGender
            gender={props.gender}
            setGender={props.setGender}
        />
        <CCName creatorData={props.creatorData}/>
        <CCParents
            mother={props.mother}
            setMother={props.setMother}
            father={props.father}
            setFather={props.setFather}
            parentsMix={props.parentsMix}
            setParentsMix={props.setParentsMix}
        />
        <CCColor
            title='Body Color'
            palette={props.palette}
            color={props.bodyColor}
            setColor={props.setBodyColor}
        />
    </>
}

export default PlayerInfo;