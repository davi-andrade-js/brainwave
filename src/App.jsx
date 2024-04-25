import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Button from "./components/Button.jsx";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-teal-400 underline">
        Hello world!
      </h1>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login"></Button>
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
