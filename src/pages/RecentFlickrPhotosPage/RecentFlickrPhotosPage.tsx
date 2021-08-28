import * as S from "./styles";

import {
  FlickrPhoto,
  fetchRecentFlickrPhotos,
  getFlickrPhotoUrl,
} from "../../flickr-client";
import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

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
      <S.Wrapper>
       
          <div className="grid">
            {items.map((item) => {
              return (
                <>
                  <div className='image'>
                    <Card>
                      <Card.Body>
                        <Image src={getFlickrPhotoUrl(item)} fluid />
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
