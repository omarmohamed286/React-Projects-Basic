import { Container } from "react-bootstrap";
import person from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";

import { useState } from "react";

function App() {
  const [personData, setPersonData] = useState(person);
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData}></DatesCount>
        <DatesList person={personData}></DatesList>
        <DatesAction setPersonData={setPersonData}></DatesAction>
      </Container>
    </div>
  );
}

export default App;
