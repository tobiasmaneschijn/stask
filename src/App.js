import './App.css';
import HeaderComponent from './components/global/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { Route, Switch } from 'react-router';
import AssignmentsPage from "./components/pages/Assignments";
import FAQPage from "./components/pages/FAQPage";
import ProfilePage from "./components/pages/ProfilePage";
import SupportPage from "./components/pages/SupportPage";
function App() {
  

  return (
    <div className="App">


     <HeaderComponent></HeaderComponent>

      <>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/profile">
          <ProfilePage />
        </Route>

        <Route path="/faq">
          <FAQPage />
        </Route>

        <Route path="/support">
          <SupportPage />
        </Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <AssignmentsPage />
        </Route>
      </Switch>
      </>
     


    </div>
  );
}

export default App;
