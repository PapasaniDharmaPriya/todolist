import { useEffect, useState } from "react";
import Tasklist from "./Tasklist"
const Tasks = () => {

    const[data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/todolists')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data)
           // console.log(data);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <Tasklist todo_data={data}/>
    );
}

export default Tasks;