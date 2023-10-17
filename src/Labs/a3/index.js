import JavaScript from "./JavaScript";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
    console.log("Hello World!");
 return (
   <div>
     <h1>Assignment 3</h1>
     <TodoList/>
     <TodoItem/>
     <ConditionalOutput/>
     <Styles/>
     <Classes/>
     <JavaScript/>
   </div>
 );
}
export default Assignment3;