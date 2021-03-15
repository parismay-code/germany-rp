const TuningCategory = (props) => {
    return <div className='tuning-categories-option'>
        <img src={props.image} alt='#' />
        <span>{props.type}</span>
    </div>
}

export default TuningCategory;