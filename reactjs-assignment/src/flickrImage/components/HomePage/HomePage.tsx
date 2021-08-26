import * as S from "./styles";

import { useEffect, useState } from "react";

import { ImageProps } from "../types";

const API_KEY = "1813f2ef998677dcc2b14d048a82b467";

export const HomePage = () => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${API_KEY}&format=json&nojsoncallback=?`;

  const fetchImage = async () => {
    console.log(url);
    const response = await fetch(url);
    const jsonData = await response.json();
    setIsLoaded(true);
    setItems(jsonData.photos.photo);
    console.log(jsonData.photos.photo);
  };

  useEffect(() => {
    fetchImage();
  });

  const getFlickrPhotoUrl = (image: ImageProps) => {
    let photoUrl = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
    return photoUrl;
  };

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
