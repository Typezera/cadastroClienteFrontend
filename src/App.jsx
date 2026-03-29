import "./index.css";
import Header from "./components/header";
import Actions from "./components/actions";

function App() {
  return (
    <>
      <Header />
      <hr className="text-gray-300" />
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="mt-6 text-3xl">
          AC<span className="bg-gray-300 text-gray-100 rounded-md">ME</span>{" "}
          <span className="font-semibold">Acme corp. Admin app</span>
        </h1>
        <p className="mt-4">
          Acme corp. is a global e-com company and this is a support application
          to add new users
        </p>
        <Actions />
      </div>
    </>
  );
}

export default App;
