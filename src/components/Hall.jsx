import "./Hall.css";
import Card from "./Card";

function Hall({title, user}) {
  return (
    <div className="text-center">
        <br />
        <h1>{title}</h1>
        <br />
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
