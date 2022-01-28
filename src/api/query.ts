import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";

import { TFetchQuery } from "../typings/fetch";

export const queryStringBuilder = (arg: Array<TFetchQuery>): string =>
  map(arg, values => {
    const key = get(values, "key");
    const value = get(values, "value");

    return isEmpty(value) ? key : `${key}=${value}`;
  }).join("&");
