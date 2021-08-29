import * as S from "./styles";

import { Card, Image } from "react-bootstrap";
import {
  FlickrPhoto,
  fetchRecentFlickrPhotos,
  getFlickrPhotoUrl,
} from "../../flickr-client";
import { useEffect, useState } from "react";

export const RecentFlickrPhotosPage: React.FC = () => {
  const [photos, setPhotos] = useState<FlickrPhoto[]>([]);

  useEffect(() => {
    fetchRecentFlickrPhotos().then((photos) => {
      setPhotos(photos);
    });
  }, []);
  
  return (
    <>
      <S.Wrapper>
        <div className="grid">
          {photos.map((item) => {
            return (
              <>
                <div className="image">
                  <Card>
                    <Card.Body>
                      <Image
                        key={item.id}
                        src={getFlickrPhotoUrl(item)}
                        fluid
                      />
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </S.Wrapper>
    </>
  );
};
