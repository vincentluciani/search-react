import { VscTriangleDown} from "react-icons/vsc";
import './Chevron.css'

const Chevron = (props) => {

    return(
        <div className={"chevron " + props.orientation}>
            <VscTriangleDown/>
        </div>
    )

}

export default Chevron