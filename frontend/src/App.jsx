import DetailsForm from "./components/DetailsForm";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
    <div className="min-h-screen m-0 p-0 overflow-x-hidden overflow-y-auto box-border flex flex-col font-mono">
      <Navbar/>
      <DetailsForm />
    </div>
    </>
  );
}

export default App;
