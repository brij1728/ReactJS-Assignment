import {
  FlickrPhoto,
  getFlickrPhotoUrl,
  searchFlickrPhotos,
} from "../../flickr-client";
import { useEffect, useState } from "react";

import Image from "react-bootstrap/Image";
import { SearchBar } from "../../flickrImage/components/SearchBar";
import { useDebounce } from "use-debounce";

export const SearchFlickrPhotosPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTextDebounced] = useDebounce(searchText, 500);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const [items, setItems] = useState<FlickrPhoto[]>([]);

  useEffect(() => {
    console.log(searchTextDebounced);

    if (searchTextDebounced.length < 3) {
      setItems([]);
    } else {
    }
    searchFlickrPhotos(searchTextDebounced).then((photos) => {
      setItems(photos);
    });
  }, [searchTextDebounced]);

  return (
    <>
      <div>
        <SearchBar
          onChange={(newValue) => setSearchText(newValue)}
          onSubmit={() => handleSubmit}
        />
        {items.map((item) => {
          return <Image  key={item.id} src={getFlickrPhotoUrl(item)} fluid />;
        })}
      </div>
    </>
  );
};
