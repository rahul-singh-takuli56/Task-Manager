import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TaskApp from "./components/TaskApp";

const App = () => {
  return (
    <div className="h-full bg-slate-900 font-roboto">
      <Navbar />
      <TaskApp />
      <Footer />
    </div>
  );
};

export default App;
