
import './App.css';
import {Content} from './components/Content.js';
import Displaytodo from './components/displaytodo/Displaytodo';

import Adduser from './components/user/Adduser';

const todoDBList=[{id:1,todo:"Meeting",deadline:'2020-03-23',assignee:{fullname:"test"},status:"pending"}]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          
       <Content/>
       <Adduser/>
       <h3>Created Task List</h3>
       <Displaytodo list={todoDBList}/>
       
       
       

     
      
       
        </div>
       
      </header>
    </div>
  );
}

export default App;
