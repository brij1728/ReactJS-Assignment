import * as S from "./styles";

import { FlickrPhoto, getFlickrPhotoUrl } from "../../../flickr-client";

import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export interface IPhotosList {
  photos: FlickrPhoto[];
}
export const PhotosList: React.FC<IPhotosList> = ({ photos }) => {
  return (
    <>
      <S.Wrapper>
        <div className="grid">
          {photos.map((photo) => {
            return (
              <>
                <div className="image">
                  <Card>
                    <Card.Body>
                      <Image
                        key={photo.id}
                        src={getFlickrPhotoUrl(photo)}
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
