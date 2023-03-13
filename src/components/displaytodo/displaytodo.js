import { Container } from "react-bootstrap";

const TableHeader = () => {
    return (
    <thead>
  <tr>
  
    <th>Todo </th>
    <th>Assignee</th>
    <th>Deadline</th>
   <th>Status</th>
  </tr>
  
    </thead>
    );
  }
  
   
  const TableAction = () => {
    return (
    <>
        <button type='button' className='btn btn-danger' >Delete</button>
        <button type='button' className='btn btn-warning'>Edit</button>
        <button type='button' className='btn btn-warning'>Save</button>
    </>
    );
  }



let Displaytodo=(props)=>{

return(
    <Container >
<h1>Created Task List</h1>

<table>
<TableHeader/>

<tbody>

  {props.map(item=>{
   return(
<tr>
<td>{item.todo}</td>
<td>{item.assignee}</td>
<td>{item.deadline}</td>
<td>{item.status}</td>
<td>  <TableAction/>  </td>

</tr>);})}

 </tbody>

</table>

</Container > );


}

export default Displaytodo;