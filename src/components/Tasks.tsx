import React, {useEffect} from 'react';
import { Button, Card, Paper } from '@mui/material';
import css from './app.module.css'

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
    

  return (
    <div>

        <div id="tasks">
      <Button variant="contained" 
            type="submit" 
            color="success"
            onClick={e=>getTasks()}>Refresh</Button>

        {tasks.map((task: Task) => (
                <Card sx={{padding: '5px'}} key={task.id}>
                  <b className='name'>{task.name}</b>
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

