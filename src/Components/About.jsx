import Wrapper from '../Common/Wrapper/index';
import {useState, useCallback, useMemo} from 'react';
import Todos from './Todo';

function About() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);

    const expensiveCalculation = (num) => {
      console.log("Calculating...");
      for (let i = 0; i < 1000000000; i++) {
        num += 1;
      }
      return num;
    }

    const calculation = useMemo(() => expensiveCalculation(count), [count])
    
    const increment = () => {
      setCount((c) => c + 1);
    }

    const addTodo = useCallback(() => {
      setTodos((t) => [...t, `Todo ${t.length + 1}`])
    },[todos]);
    
    return (
      <>
        <Todos todos={todos} addTodos={addTodo} />
        <hr />
        <div>
          Count : {count}
          <button onClick={()=>{increment()}}>+</button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </>
    );
  }
  
  export default About;