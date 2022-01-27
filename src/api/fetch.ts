import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import nodeFetch from "node-fetch";

import { isBrowser } from "../browser";
import { TFetchQuery, TFetchUrl } from "../typings";

export const fetchApi = (
  url: TFetchUrl,
  toCall: (response: any) => void,
  nodeFetchCallback: typeof nodeFetch = nodeFetch
) => {
  const fetchData: typeof nodeFetch =
    isBrowser() && window.fetch
      ? ((window.fetch as unknown) as typeof nodeFetch)
      : nodeFetchCallback;

  if (typeof url === "string") {
    fetchData(url)
      .then((response: any) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then((response: any) => toCall(response));
  } else {
    let fetchUrl;
    const urlString = get(url, "url");
    const urlQuery = get(url, "query") as TFetchQuery[] | undefined;

    if (!isEmpty(urlQuery)) {
      const queryString = map(urlQuery, values => {
        const key = get(values, "key");
        const value = get(values, "value");

        return isEmpty(value) ? key : `${key}=${value}`;
      }).join("&");

      fetchUrl = `${urlString}?${queryString}`;
    } else {
      fetchUrl = urlString;
    }

    const sufix = get(url, "suffix");

    fetchData(
      !isEmpty(sufix) ? `${fetchUrl}${sufix}` : fetchUrl,
      get(url, "options")
    )
      .then((response: any) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then((response: any) => toCall(response));
  }
};
