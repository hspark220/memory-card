const Card = (props) => {
    return(
        <div className="card" onClick={props.onClick}>
            <h1>{props.card}</h1>
        </div>
    )
}

export default Card;