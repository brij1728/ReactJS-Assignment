import { FlickrPhoto } from "../../../flickr-client/";

export const ImageCard: React.FC<FlickrPhoto> = (props) => {
  return (
    <>
      <ul>{props.id}</ul>
    </>
  );
};
