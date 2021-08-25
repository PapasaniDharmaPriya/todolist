import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Add = () => {

    const history = useHistory();
    const [state, setstate] = useState({
        item: null
    })

    const handleChange = (event) =>
    {
        const{name,value} = event.target;
        setstate({
            [name] : value
        })
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        axios.post('http://localhost:5001/todolists',
        {
            item: state.item,
            isdone: false
        })
        .then(res => {
            history.push('/')
        })
        .catch(err => {
            console.log(err);
        })
        history.go('/')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mention Your todolists here...</Form.Label>
                <input type="text" name ="item"  onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form >
    );
}

export default Add;