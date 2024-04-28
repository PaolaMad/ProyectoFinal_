import Login from "./AuthPages/Login";
import Sidebar from "./components/Sidebar";
import { AuthProvider } from "./context/AuthProvider";
import AppRouter from "./routes/AppRouter";

function App() {

  return (

     <AuthProvider>
       <AppRouter/>
     </AuthProvider>
    // <div>
    //   <Sidebar />

    //   <Login />
    // </div>
  );

}

export default App
