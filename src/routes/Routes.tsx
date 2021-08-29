import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import { RecentFlickrPhotosPage } from "../pages/RecentFlickrPhotosPage";
import { SearchFlickrPhotosPage } from "../pages/SearchFlickrPhotosPage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand as={Link} to="/">
          Flickr Photos API Demo
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/recent">
            Recent photos
          </Nav.Link>
          <Nav.Link as={Link} to="/search">
            Search Photos
          </Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Redirect to="/recent" />
        </Route>

        <Route path="/recent">
          <RecentFlickrPhotosPage />
        </Route>
        
        <Route path="/search">
          <SearchFlickrPhotosPage />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      ;
    </BrowserRouter>
  );
};
