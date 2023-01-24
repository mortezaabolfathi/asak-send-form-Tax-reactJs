import { AppRouting } from "./routes/index.routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
        <AppRouting />
        <ToastContainer position="bottom-right" />
      
    </>
  );
}

export default App;
