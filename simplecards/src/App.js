import "./App.css";
import { data } from "./data";
import Card from "./components/Cards/Card.js";

function App() {
  return (
    <div className="maincardContainer">
      {data.map((i) => {
        console.log(i);
        return <Card i={i} />;
      })}
    </div>
  );
}

export default App;
