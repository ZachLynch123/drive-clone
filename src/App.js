import './App.css';
import Header from "./components/Header/Header/Header";
import Sidebar from './components/Header/Sidebar/Sidebar';
import FilesView from './components/Header/FilesView/FilesView';

function App() {
  // auth


  return (
    <div className="App">
      <Header />
      <Sidebar />
      <FilesView />
      {/* if user auth
        sideBar
        fileView
        sideIcon
      */}

      {/* else
        render sign in
      */}
    </div>
  );
}

export default App;
