import {
  FlickrPhoto,
  fetchRecentFlickrPhotos,
  getFlickrPhotoUrl,
} from "../../flickr-client";
import { useEffect, useState } from "react";

export const RecentFlickrPhotosPage = () => {
  const [items, setItems] = useState<FlickrPhoto[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchRecentFlickrPhotos().then((photos) => {
      setItems(photos);
      setIsLoaded(true);
    });
  }, []);
  return (
    <>
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
    </>
  );
};
function recentFlickrPhotos() {
  throw new Error("Function not implemented.");
}
