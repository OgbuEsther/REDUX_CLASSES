import "./App.css";
import LoginPage from "./components/LoginPage";
import Profile from "./components/Profile";
// import MyProfile from "../src/practice/MyProfile";
// import Login from "./practice/Login";

function App() {
  return (
    <div className="App">
      <center style={{ marginTop: "300px" }}>
        <LoginPage />
        <Profile />
        {/* <MyProfile />
        <Login /> */}
      </center>
    </div>
  );
}

export default App;
