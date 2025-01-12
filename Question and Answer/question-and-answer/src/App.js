import { Container, Row, Col, Button } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { question } from "./data";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [data, setData] = useState(question);

  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify("تم الإضافة بنجاح", "success");
  };
  const deleteAllItems = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([]);
    notify("تم حذف الكل بنجاح", "success");
  };

  const deleteItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]);
    notify("تم حذف السؤال بنجاح", "success");

    if (items.length <= 0) {
      deleteAllItems();
    }
  };

  const notify = (message, type) => {
    if (type === "error") toast.error(message);
    else if (type === "success") toast.success(message);
  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">اسئلة واجوبة شائعة</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify}></FormInput>
            <QAList data={data} deleteItem={deleteItem}></QAList>
            {localStorage.getItem("items") != null ? (
              <Button onClick={deleteAllItems} className="btn-color w-100 my-3">
                مسح الكل
              </Button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer></ToastContainer>
      </Container>
    </div>
  );
}

export default App;
