import React from "react";
import { Row, Accordion, Button } from "react-bootstrap";
import { question } from "../data";

const QAList = ({ data, deleteItem }) => {
  const localData = JSON.parse(localStorage.getItem("items"));
  const onDelete = (id) => {
    if (localStorage.getItem("items") != null) {
      const index = question.findIndex((item) => item.id === id);
      question.splice(index, 1);
      deleteItem(question);
    }
  };
  return (
    <Row className="my-3">
      <Accordion>
        {localStorage.getItem("items") != null ? (
          localData.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className="m-auto">{item.q}</div>
                </Accordion.Header>
                <Accordion.Body className="text-end">
                  <div className="px-3 d-inline">{item.a}</div>
                  <Button
                    onClick={() => onDelete(item.id)}
                    className="btn-color"
                  >
                    مسح
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5">لا يوجد اسئلة</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAList;
