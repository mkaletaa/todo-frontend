import React, {useState} from 'react';
import axios from 'axios';
import Form from './components/Form';
import { Button } from '@mui/material';
import css from './app.module.css'

function App() {
  const [tasks, setTasks] = useState([]);

  function getTasks(){
    axios.get('http://localhost:8080/tasks')
         .then(response => {
           setTasks(response.data.reverse());
           console.log("response: ", response.data)
       })
       .catch(error => {
           console.log("error",error);
       });
  }

  type Task = {
    id: any,
    name: string,
    description: string
  }

  return (
    <div className="flex" >

      <Form/>

      <Button variant="contained" 
            type="submit" 
            color="success"
            onClick={e=>getTasks()}>Get tasks</Button>

        {tasks.map((task: Task) => (
                <div key={task.id}>
                  <div>{task.name}, {task.description}</div>
                </div>
              ))}

    </div>
  );
}

export default App;

