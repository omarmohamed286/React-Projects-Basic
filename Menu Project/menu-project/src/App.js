import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./data";
import { useState } from "react";


function App() {
  const [itemsData, setItemsData] = useState(items);

  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];

  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    } 
  };

  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch}></NavBar>
      <Container>
        <Header></Header>
        <Category filterByCategory={filterByCategory} allCategory={allCategory}></Category>
        <ItemsList itemsData={itemsData}></ItemsList>
      </Container>
    </div>
  );
}

export default App;
