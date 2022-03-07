import NavBar from "./Components/NavBar";
import AllProducts from "./Components/AllProducts";
import AddProducts from "./Components/AddProducts";
import NotFound from "./Components/NotFound";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EditProducts from "./Components/EditProducts";

function App() {
  return (
    <BrowserRouter>
        <NavBar/>

        <Switch>
            <Route exact path="/" component={AllProducts} />
            <Route exact path = "/add" component ={AddProducts} />
            <Route exact path = "/edit/:id" component ={EditProducts} />

            <Route component={NotFound} />
        </Switch>


    </BrowserRouter>
  );
}

export default App;
