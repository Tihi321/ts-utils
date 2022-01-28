import { fetchApi } from "./fetch";

type TResponse = {
  url: string;
  options?: any;
};

const url: string = "https://www.googleapis.com/v2";

const makeResponse = (urlArgument: string, options?: any) => ({
  url: urlArgument,
  options
});

const mockResponse = (res: any) => ({
  json: () => res,
  ok: true
});

const nodeFetchMock = (urlArgument: string, options?: any) =>
  new Promise(resolve => {
    resolve(mockResponse(makeResponse(urlArgument, options)));
  });

const jestCallback = jest.fn((response: TResponse): TResponse => response);

test("It will call fetch with default url string", async () => {
  await new Promise(resolve => {
    fetchApi({
      url,
      toCall: response => {
        jestCallback(response);
        resolve(undefined);
      },
      callFunction: nodeFetchMock
    });
  });

  expect(jestCallback.mock.calls).toEqual([[makeResponse(url)]]);
});

test("It will call fetch with query arguemnts", async () => {
  await new Promise(resolve => {
    fetchApi({
      url: {
        url,
        query: [
          {
            key: "firstKey",
            value: "firstVal"
          },
          {
            key: "secondKey",
            value: "secondVal"
          }
        ]
      },
      toCall: response => {
        jestCallback(response);
        resolve(undefined);
      },
      callFunction: nodeFetchMock
    });
  });

  expect(jestCallback.mock.calls).toEqual([
    [makeResponse(`${url}?firstKey=firstVal&secondKey=secondVal`)]
  ]);
});
