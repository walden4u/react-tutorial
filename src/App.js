import "./styles.css";
import Greet from "../components/Greet";
import GreetClass from "../components/GreetClass";
import Hello from "../components/Hello";

export default function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman" />
      <Greet name="Clark" heroName="Superman" />
      <button>Action</button>
      <Greet name="Diana" heroName="Wonder Woman" />
      <Greet>안녕</Greet>
      {/* <GreetClass /> */}
      {/* <Hello /> */}
      <GreetClass name="Bruce" heroName="Batman" />
    </div>
  );
}
