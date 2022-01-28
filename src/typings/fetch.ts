export type TFetchQuery = {
  key: string;
  value?: string;
};

export type TFetchUrl =
  | string
  | {
      url: string;
      options?: any;
      query?: TFetchQuery[];
      suffix?: string;
    };

export type TFetchApiParams = {
  url: TFetchUrl;
  toCall: (response: any) => void;
  callFunction?: Function;
  json?: boolean;
};
