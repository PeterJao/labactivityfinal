import "./App.css";
import Header from "./Header.js";
import Body from "./Body.js";
import Popular from "./popular.js";
import popularItems from "./popularItems.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Popular />
      <popularItems />
    </div>
  );
}

export default App;
