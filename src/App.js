
import './App.css';
import {Content,Displaytodo} from './components/Content.js';

import Adduser from './components/user/adduser';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          
       <Content/>
       <Adduser/>
     
      
       
        </div>
       
      </header>
    </div>
  );
}

export default App;
