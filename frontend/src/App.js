import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing";
import ProductsPage from "./pages/ProductsPage";
import Login from "./Form2/Login";
import Register from "./Form1/Register";
import OilsPage from "./pages/OilsPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Landing isLoggedIn={isLoggedIn} username={username} />} />
        <Route path="/pages/productspage" component={ProductsPage} />
        <Route path="/pages/" component={OilsPage} />
        <Route path="/Form2" component={() => <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
        <Route path="/Form1/Register" component={Register} />
        {/* Add more routes for other pages if needed */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
