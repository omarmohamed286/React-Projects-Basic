import React, { useState } from "react";
import { Row, Button, Form, Col } from "react-bootstrap";
import { question } from "../data";

const FormInput = ({ onAdd, notify }) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");

  const addNewItem = () => {
    if (qu === "" || an === "") {
      notify("من فضلك اكمل البيانات", "error");
      return;
    }
    question.push({ id: Math.random(), q: qu, a: an });
    setQu("");
    setAn("");
    onAdd();
  };
  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control
          value={qu}
          onChange={(e) => setQu(e.target.value)}
          type="text"
          placeholder="ادخل السؤال"
        />
      </Col>
      <Col sm="5">
        <Form.Control
          value={an}
          onChange={(e) => setAn(e.target.value)}
          type="text"
          placeholder="ادخل الإجابة"
        />
      </Col>
      <Col sm="2">
        <Button onClick={addNewItem} className="btn-color w-100" type="submit">
          إضافة
        </Button>
      </Col>
    </Row>
  );
};

export default FormInput;
