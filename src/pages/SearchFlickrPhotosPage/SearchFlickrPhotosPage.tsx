import { FlickrPhoto, searchFlickrPhotos } from "../../flickr-client";
import { useEffect, useState } from "react";

import { PhotosList } from "../../flickrImage/components/PhotosList";
import { SearchBar } from "../../flickrImage/components/SearchBar";
import { useDebounce } from "use-debounce";

export const SearchFlickrPhotosPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTextDebounced] = useDebounce(searchText, 500);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const [photos, setPhotos] = useState<FlickrPhoto[]>([]);

  useEffect(() => {
    console.log(searchTextDebounced);

    if (searchTextDebounced.length < 3) {
      setPhotos([]);
    } else {
    }
    searchFlickrPhotos(searchTextDebounced).then((photos) => {
      setPhotos(photos);
    });
  }, [searchTextDebounced]);

  return (
    <>
      <div>
        <SearchBar
          onChange={(newValue) => setSearchText(newValue)}
          onSubmit={() => handleSubmit}
        />
        <PhotosList photos={photos} />
      </div>
    </>
  );
};
