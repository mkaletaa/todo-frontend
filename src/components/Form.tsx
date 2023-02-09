import React, {useState} from 'react'
import axios from 'axios';
import Tasks from './Tasks';
import {Button, TextField} from '@mui/material'

export default function Form() {

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [tasks, setTasks] = useState([]);

    function postTasks(e: React.MouseEvent<HTMLElement, MouseEvent>){
        e.preventDefault()

    if(name.trim().length !== 0){
        axios.post('http://localhost:8080/tasks', {
        // id: crypto.randomUUID(),
        name,
        description,
    })
    .then(response => {
        console.log(response);
        setName(""); setDescription("")
        getTasks()
    })
    .catch(error => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    });
    }

}

function getTasks(){
    axios.get('http://localhost:8080/tasks')
         .then(response => {
           setTasks(response.data.reverse());
           console.log("response: ", tasks)
       })
       .catch(error => {
           console.log("error",error);
       });
  }

  return (
    <div className='flex'>
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

        <Tasks getTasks={getTasks} tasks={tasks}/>
    </div>
  )
}