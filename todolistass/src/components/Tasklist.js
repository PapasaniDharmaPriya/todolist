import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useHistory } from 'react-router';

const Tasklist = ({ todo_data}) => {

    const history = useHistory();

        const updateItem = (id,item) =>
        {
            
            axios.put('http://localhost:5001/todolists/' + id,
            {
                item: item,
                isdone : true
            })
            .then(result =>
                {
                    console.log(result);
                })
            .catch(err =>
                {
                    console.log(err);
                })

        }


    const handleChange = (id,item) =>
    {
        updateItem(id,item);
        history.go('/')
    }

    const deleteTodo = (id) => 
    {
        axios.delete('http://localhost:5001/todolists/'+id)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        history.go('/')
    }

    const itemStyles = {
        fontSize: "20px",
        color: "ORANGE",
        fontFamily: "serif",
        backgroundColor: "HASH",
        padding: "2%",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "space-around"
    }
  
    return (
        <Form>
        <ListGroup>
        {todo_data.map((ele) => (
            <ListGroup.Item key={ele.id} style={itemStyles}>
               <Form.Check aria-label="option 1" label={ele.item} onChange={() => handleChange(ele.id,ele.item,ele.date)} 
               disabled={ele.isdone} />
               <Button variant="outline-danger" style={{marginLeft: "20px"}} onClick={() => {deleteTodo(ele.id)}}>X</Button>
            </ListGroup.Item>
        ))}
      </ListGroup>
      </Form>
    );
}

export default Tasklist;