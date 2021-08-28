import {
  FlickrPhoto,
  getFlickrPhotoUrl,
  searchFlickrPhotos,
} from "../../flickr-client";
import { useEffect, useState } from "react";

import Image from "react-bootstrap/Image";
import { SearchBar } from "../../flickrImage/components/SearchBar";

export const SearchFlickrPhotosPage = () => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const [items, setItems] = useState<FlickrPhoto[]>([]);

  useEffect(() => {
    console.log(searchText);

    if (searchText.length < 3) {
      setItems([]);
    } else {
    }
    searchFlickrPhotos(searchText).then((photos) => {
      setItems(photos);
    });
  }, [searchText]);

  return (
    <>
      <div>
        <SearchBar
          onChange={(newValue) => setSearchText(newValue)}
          onSubmit={() => handleSubmit}
        />
        {/* <S.Wrapper> */}
        {items.map((item) => {
          return (
            <>
              <Image src={getFlickrPhotoUrl(item)} fluid />
            </>
          );
        })}
        {/* </S.Wrapper> */}
      </div>
    </>
  );
};
