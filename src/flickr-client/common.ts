import { FlickrPhoto } from "./types";

const FLICKR_API_KEY = "1813f2ef998677dcc2b14d048a82b467";

export const fetchJsonData = async (url: string): Promise<any> =>
  await (await fetch(url)).json();

export const buildUrl = (queryParams: {
  [key: string]: string | number | boolean;
}): string => {
  const url = new URL("https://api.flickr.com/services/rest/");

  url.searchParams.append("api_key", FLICKR_API_KEY);
  url.searchParams.append("format", "json");
  url.searchParams.append("nojsoncallback", "?");

  for (const [key, value] of Object.entries(queryParams)) {
    url.searchParams.append(key, value.toString());
  }

  return url.href;
};

export const getFlickrPhotoUrl = (image: FlickrPhoto) =>
  `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
