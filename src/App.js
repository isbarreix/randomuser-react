import './App.css';
import { Route } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import HomeView from './views/home/HomeView';

function App() {
  return (
    <>
      <AppBar position="static"> 
        <Toolbar />
      </AppBar>
      <div className="App">
        <Route path="/" render={(props) => <HomeView {...props} />}/>
      </div>
    </>
  );
}
export default App;
