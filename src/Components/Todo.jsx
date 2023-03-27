import {memo} from 'react';

function Todos({todos, addTodos}){
    console.log("sdfbsdkjf");
    return (
        <>
            <h2>Todos</h2>
            {
                todos.map((todo, key)=>{
                    return (
                        <p key={key}>{todo}</p>
                    )
                })
            }
            <button onClick={addTodos}>Add Todo</button>
        </>
    )
}

export default memo(Todos);