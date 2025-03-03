import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css"

const randInt = (n) => {
  return Math.floor(Math.random() * n);
};

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

export default function Header() {
  const description = reactDescriptions[randInt(3)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
