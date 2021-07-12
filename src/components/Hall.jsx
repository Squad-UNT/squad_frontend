import "./Hall.css";
import Card from "./Card";

function Hall({title}) {
      
  return (
    <div className="text-center">
        <br />
        <h1>{title}</h1>
        <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  );
}

export default Hall;
