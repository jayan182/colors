import {useState, useCallback, useMemo} from 'react';
import Task from './Task';

function Memo(){
    const [task, setTask] = useState(['Task 1', 'Task 2']);
    const [counter, setCounter] = useState(0);

    const calculation  = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    }
    
    let calc = useMemo(()=> calculation(counter), [counter]);

    const increment = () =>{
        setCounter(i => (i+1));
    }

    const addMore =  () =>{
        setTask(i => [...i, `Task ${i.length+1}`]);
    };

    return (
        <>
            <h2>Task</h2>
            <Task tasks={task} addMore={addMore} />
            <br />
            <>{counter}</>
            <br />
            <button onClick={()=>{increment()}}>+</button>
            <br />
            {calc}
        </>
    )
}

export default Memo;