import './App.css';
import { Route, Switch } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import HomeView from './views/home/HomeView';
import DetailView from './views/detail/DetailView';
import { Provider as UsersProvider } from './context/UserContext';

function AppMain() {
  return (
    <>
      <AppBar position="static"> 
        <Toolbar/>
      </AppBar>
        <div className="App">
          <Switch>
             <Route path="/person/:id" component={(props) => <DetailView {...props} />}/>
             <Route path="/" component={(props) => <HomeView {...props} />}/>
            </Switch>
        </div>
    </>
  );
}

const App = () => (  
    <UsersProvider>
      <AppMain />
    </UsersProvider>
  );

export default App;
