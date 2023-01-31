import React, {useState} from 'react'
import axios from 'axios';

import {Button, TextField} from '@mui/material'

export default function Form() {

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    function postTasks(e: React.MouseEvent<HTMLElement, MouseEvent>){
        e.preventDefault()
        axios.post('http://localhost:8080/tasks', {
        id: crypto.randomUUID(),
        name,
        description,
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    });
}

  return (
    <>
        <form action="" method="POST" className="flex" id="form">
       
        <TextField
        id='newPost'
        multiline
        value={name}
        onChange={e=>setName(e.target.value)}
        label='name'
        />

        <TextField
        id='newPost'
        multiline
        value={description}
        onChange={e=>setDescription(e.target.value)}
        label='description'
        />

        <Button variant="contained" 
            type="submit" 
            onClick={e=>postTasks(e)}>Add a task</Button>

        </form>
    </>
  )
}