import { buildUrl, fetchJsonData } from "./common";

import { FlickrPhoto } from "./types";

export const fetchRecentFlickrPhotos = async (): Promise<FlickrPhoto[]> => {
  const url = buildUrl({ method: "flickr.photos.getRecent" });
  const jsonData = await fetchJsonData(url);

  return jsonData.photos.photo;
};

export const searchFlickrPhotos = async (
  searchText: string
): Promise<FlickrPhoto[]> => {
  searchText = searchText.trim();
  if (!searchText) {
    return [];
  }

  const url = buildUrl({ method: "flickr.photos.search", text: searchText });
  const jsonData = await fetchJsonData(url);

  return jsonData.photos.photo;
};
