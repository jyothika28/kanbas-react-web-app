import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import DateStateVariable from "./DateStateVariable";
import StringStateVariables from "./StringStateVariables";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
    
 return(
   <>
     <h1>Assignment 4</h1>
     <Add a={1} b={2} />
     <ClickEvent />
     <PassingDataOnEvent />
     <PassingFunctions theFunction={sayHello} />
     <EventObject />
     <Counter />
     <BooleanStateVariables />
     <StringStateVariables />
     <DateStateVariable />
     <ObjectStateVariable/>
     <ArrayStateVariable/>
     <ParentStateComponent/>
     <ReduxExamples/>
     
   </>
 );
};
export default Assignment4;