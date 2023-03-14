import { Container } from "react-bootstrap";


const Displaytodo = (props) => {


  const TableHeader = () => {
    return (
      <>
        <thead>
          <tr>
            <th>Id</th>
            <th>Todo </th>
            <th>deadline </th>
            <th>assignee </th>
            <th>status </th>

            
          </tr>
        </thead>
      </>
    );
  };
  
  const TableAction = () => {

    
    return (
      <>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
        <button type="button" className="btn btn-warning">
          Edit
        </button>
        <button type="button" className="btn btn-warning">
          Save
        </button>
      </>
    );
  };


  return (
    <Container>
      <table>
        <TableHeader />

        <tbody>
          {props.list.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.todo}</td>
                <td> {item.deadline}</td>
                <td> {item.assignee.fullname}</td>
                <td> {item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Displaytodo;
