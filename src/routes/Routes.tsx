import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { RecentFlickrPhotosPage } from "../pages/RecentFlickrPhotosPage";
import { SearchFlickrPhotosPage } from "../pages/SearchFlickrPhotosPage";

export const Routes = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/searchFlickrPhotos">Search Flickr Photos</Link>
        </li>
        <li>
          <Link to="/recentFlickrPhotos">Recent Flickr Photos</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/recentFlickrPhotos">
          <RecentFlickrPhotosPage />
        </Route>
        <Route path="/searchFlickrPhotos">
          <SearchFlickrPhotosPage />
        </Route>
      </Switch>
      ;
    </Router>
  );
};
