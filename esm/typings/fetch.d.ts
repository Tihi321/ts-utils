export declare type TFetchQuery = {
    key: string;
    value?: string;
};
export declare type TFetchUrl = string | {
    url: string;
    options?: any;
    query?: TFetchQuery[];
    suffix?: string;
};
export declare type TFetchApiParams = {
    url: TFetchUrl;
    toCall: (response: any) => void;
    callFunction?: Function;
    json?: boolean;
};
//# sourceMappingURL=fetch.d.ts.map