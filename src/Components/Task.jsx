import {memo} from 'react';

function Task({tasks, addMore}){
    console.log("asdkfjgasdfkgadsfk");
    return (
        <>
            <ul>
            {
                tasks.map((task, key)=>{
                    return (
                        <li key={key}>{task}</li>
                    );
                })
            }
            </ul>
            <br />
            <button onClick={()=>{addMore()}}>Add more task</button>
        </>
    )
}

export default memo(Task);