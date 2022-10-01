import './RoundIndicator.css'

const RoundIndicator = (props) => {

    let className = "is-category-indicator" + ((props.numberToShow === 0)?" hidden":"")
    
    return(
        <div class={className} >{props.numberToShow}</div>
    )

}

export default RoundIndicator