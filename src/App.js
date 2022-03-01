import "./App.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Content from "./container/Content";
import Aside from "./components/Aside";
import Divider from "./components/Divider";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="mainContent">
        <Sidebar className="sidebar" />
        <Divider />
        <Content className="content" />
        <Divider />
        <Aside className="aside" />
      </div>
    </div>
  );
}

export default App;
