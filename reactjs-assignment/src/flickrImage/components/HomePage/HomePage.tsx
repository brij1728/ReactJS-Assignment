import * as S from "./styles";

import { FlickrPhoto, getFlickrPhotoUrl, searchFlickrPhotos } from "../../../flickr-client";
import { useEffect, useState } from "react";

import { ImageCard } from "../ImageCard";

export const HomePage = () => {
  const [items, setItems] = useState<FlickrPhoto[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    searchFlickrPhotos('Varanasi ganges').then((photos) => {
      setItems(photos);
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      <S.wrapper>
        {items.map((item) => {
          console.log(item);

          return (
            <>
              {/* <S.Photo> */}
              <img src={getFlickrPhotoUrl(item)} alt=""></img>
              {/* </S.Photo> */}
             
            </>
          );
        })}
      </S.wrapper>
    </>
  );
};
