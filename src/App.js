
import './App.css';
import {Content} from './components/Content.js';
import Displaytodo from './components/displaytodo/displaytodo';

import Adduser from './components/user/adduser';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          
       <Content/>
       <Adduser/>
       <Displaytodo list={}/>
       

     
      
       
        </div>
       
      </header>
    </div>
  );
}

export default App;
