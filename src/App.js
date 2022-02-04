import React from "react";
import "./styles.css";
import Search from "./components/Search";
import ProductGrid from "./components/ProductGrid";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Desi Myntra</h1>;
        <Search />;
        <ProductGrid />;
      </>
    );
  }
}

export default App;
