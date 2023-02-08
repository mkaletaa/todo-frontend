import React, {useEffect} from 'react';
import { Button, Card, Paper } from '@mui/material';
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type Task = {
  id: any,
  name: string,
  description: string
}

type TaskProps = {
    getTasks: () => void;
    tasks: {
        id: any,
        name: string,
        description: string
    }[]
    // tasks: Array<Task>
    // tasks: Task[];
}

function Tasks({getTasks, tasks}: TaskProps) {

    useEffect(()=>{
        getTasks()
    }, [])

    function deleteTask(e: any){
      console.log(e)
      axios.delete(`http://localhost:8080/tasks/${e}`)
    .then(response => {
      console.log(response.status);
      console.log(e)
      getTasks()
    })
    .catch(error => {
      console.log(error.message);
    });
    }
    

  return (
    <div>

        <div id="tasks">
      <Button variant="contained" 
            type="submit" 
            color="success"
            onClick={e=>getTasks()}>Refresh</Button>

        {tasks.map((task: Task, a:number) => (
                <Card sx={{padding: '5px'}} key={task.id}>
                  <div className='header'>
                    <b className='name'>{tasks.length-a}) {task.name}</b>
                    <DeleteForeverIcon className='trash'
                     onClick={e=>deleteTask(task.id)}/>
                  </div>
                  <div className='description'>{task.description}</div>
                </Card>
              ))}
            </div>


            {/* <div>
                <span className='name'>name</span>
                <div className='description'>desclorem
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aut quas quam fugit? Laudantium corporis perferendis voluptas consectetur debitis quos consequuntur odit deserunt, ipsa, incidunt adipisci rem in voluptate tenetur!
                </div>
            </div>
            <div>
                <span className='name'>name</span>
                <div className='description'>desc</div>
            </div>         */}


    </div>
  );
}

export default Tasks;

