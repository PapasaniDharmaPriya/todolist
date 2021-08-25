import Tasks from "./Tasks";
import { Container } from "react-bootstrap";
import Add from './Add'

const Header = () => {
    return (
        <div className={Container}>
            <Add />
            <br /><br />
            <Tasks />
        </div>
        
    );

}

export default Header;