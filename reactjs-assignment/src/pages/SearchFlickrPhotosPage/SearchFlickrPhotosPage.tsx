import {
  FlickrPhoto,
  getFlickrPhotoUrl,
  searchFlickrPhotos,
} from "../../flickr-client";
import { useEffect, useState } from "react";

import Gallery from "react-photo-gallery";
import { SearchBar } from "../../flickrImage/components/SearchBar";

export const SearchFlickrPhotosPage = () => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (event: any) => {
    setSearchText(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const [items, setItems] = useState<FlickrPhoto[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    searchFlickrPhotos(searchText).then((photos) => {
      console.log(searchText);

      setItems(photos);
      setIsLoaded(true);
    });
  }, [searchText]);

  return (
    <>
      <div>
        <div>
          <label>Search Flickr Photos </label>
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={handleChange}
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </div>

        {items.map((item) => {
          return (
            <>
              <img src={getFlickrPhotoUrl(item)} alt=""></img>
            </>
          );
        })}
      </div>
    </>
  );
};
