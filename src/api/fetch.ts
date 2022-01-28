import get from "lodash/get";
import isEmpty from "lodash/isEmpty";

import { TFetchApiParams, TFetchQuery } from "../typings";
import { queryStringBuilder } from "./query";

export const fetchApi = ({
  url,
  toCall,
  callFunction = window.fetch,
  json = true
}: TFetchApiParams) => {
  if (typeof url === "string") {
    callFunction(url)
      .then((response: any) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return json ? response.json() : response;
      })
      .then((response: any) => toCall(response));
  } else {
    let fetchUrl;
    const urlString = get(url, "url");
    const urlQuery = get(url, "query") as TFetchQuery[] | undefined;

    if (urlQuery !== undefined && !isEmpty(urlQuery)) {
      const queryString = queryStringBuilder(urlQuery);

      fetchUrl = `${urlString}?${queryString}`;
    } else {
      fetchUrl = urlString;
    }

    const sufix = get(url, "suffix");

    callFunction(
      !isEmpty(sufix) ? `${fetchUrl}${sufix}` : fetchUrl,
      get(url, "options")
    )
      .then((response: any) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return json ? response.json() : response;
      })
      .then((response: any) => toCall(response));
  }
};
