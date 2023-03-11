import { useState } from "react";
import { Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";





let Adduser = () => { 

    const [inputpeople,SetPeople]=useState({firstName:"",LastName:"",Email:""});
    const [inputList,SetPeopleInputList]=useState([]);



    let savePeople=(e)=>{
      e.preventDefault();
      const inpeople=inputpeople;
      if(inpeople.Email)
      {
        SetPeopleInputList([...inputList,inpeople])
        // To clear Input fileds after input
        SetPeople({firstName:"",LastName:"",Email:""})

      }

      else{
        alert("Email cannot be empty")
      }

    }


    return(
      <Container >
     
      <form  onSubmit={savePeople}>

         <Container className="p-3 mt-5">
          <br></br>
          <br></br>
          <br></br>
          <br></br>  <br></br>
          <br></br>
          <h3> Create Users here</h3>
      
         <input type="text" placeholder="Enter firstname"  name="inputpeople.firstName" value={inputpeople.firstName} onChange={(e)=>SetPeople({...inputpeople,firstName:e.target.value})}/>
        
         <input type="text" placeholder="Enter Lastname"  name="inputtodo.assignee" value={inputpeople.LastName} onChange={(e)=>SetPeople({...inputpeople,LastName:e.target.value})}/>

         <input type="text" placeholder="Enter email"  name="inputtodo.deadline" value={inputpeople.Email} onChange={(e)=>SetPeople({...inputpeople,Email:e.target.value})}/>
         </Container >
       
      

       <Button tyep="submit "variant="primary">Save</Button>{' '}
       
     </form>
     </Container >



    );
}

export default Adduser;