import { FlickrPhoto, fetchRecentFlickrPhotos } from "../../flickr-client";
import { useEffect, useState } from "react";

import { PhotosList } from "../../flickrImage/components/PhotosList";

export const RecentFlickrPhotosPage: React.FC = () => {
  const [photos, setPhotos] = useState<FlickrPhoto[]>([]);

  useEffect(() => {
    fetchRecentFlickrPhotos().then((photos) => {
      setPhotos(photos);
    });
  }, []);

  return (
    <>
      <PhotosList photos={photos} />
    </>
  );
};
