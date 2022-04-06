import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Tables = ({tables}) => {

  console.log('tables',tables);

  return (
    <ListGroup variant="flush">
      {tables.map(table => (
        <ListGroup.Item key={table.id} className="py-3 px-0">
          <div className="d-flex justify-content-between ">
            <div className="d-flex align-items-center">
              <h3 className="m-0">Table {table.id}</h3>
              <h6 className="mx-3 my-0">
                <small>
                  <span className="fw-bold">Status: </span>
                  <span className="fw-normal">{table.status}</span>
                </small>
              </h6>
            </div>
            <NavLink to={`/table/${table.id}`} className="btn btn-primary">Show more</NavLink>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Tables;
