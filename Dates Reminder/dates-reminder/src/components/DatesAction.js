import { Row, Col } from "react-bootstrap";
import person from "../data";

function DatesAction({ setPersonData }) {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <button
          className="btn-style p-2"
          onClick={() => {
            setPersonData([]);
          }}
        >
          مسح الكل
        </button>
        <button onClick={()=>{
            setPersonData(person)
        }} className="btn-style p-2">عرض البيانات</button>
      </Col>
    </Row>
  );
}

export default DatesAction;
