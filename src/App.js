import { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header/Header";
import Sidebar from './components/Header/Sidebar/Sidebar';
import FilesView from './components/Header/FilesView/FilesView';
import { auth, provider } from './firebase';

function App() {
  // auth
  // remembers user on refresh
  const [user, setUser] = useState();
  auth.onAuthStateChanged(setUser)

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider)
      .then(result => {
        setUser(result.user);
        console.log(result);
      })
    }
  }
  return (
    <div className="app">
    {
      user ? (
        <>
        {console.log(user.displayName)}
          <Header userPhoto={user.photoURL} userName={user.displayName}/>
          <div className="app__main">
            <Sidebar />
            <FilesView />
          </div>
        </>
      ) : (
          <div className='app__login'>
            <img src={""} alt="Google Drive" />
            <button onClick={handleLogin}>Log in to "Google"</button>
          </div>
        )
    }
  </div>
);
}



export default App;
