<div align="center">
  <h1>
    TSL Utils
  </h1>
  <sup>
    Utils to suplement lodash</a>.</em>
  </sup>
  <br />
  <br />
  <pre>yarn add tsl-utils</a></pre>
  <br />
</div>

- **Objects**

  - `pickFirstObjectItem` &mdash; Retrives first element from array value of object keys, used in combination with groupBy from lodash, groupBy returns grouped values from array with provided key in callback. If key is unique array will have one value. This can be used to take out that value
  - `renameKeys` &mdash; Update object keys with callback.
  - `objectMap` &mdash; Mapping through object keys and return object with updated values
  - `objectFilter` &mdash; Mapping through object keys and returns new filtered object
  - `cleanObject` &mdash; Mapping through object keys and removing undefined values
  - `swapObjectData` &mdash; Mapping through object keys and taking values form second object under same key
  - `swapObjectCleanedData` &mdash; Mapping through object keys and taking values form second object under same key, all undefined values are removed

- **Functions**

  - `promisifyCallback` &mdash; Promisify functions that accept callback that will be called upon resolve, example wainting for message from api

- **Arrays**

  - `includesAll` &mdash; Check if all keys from source array are in target array
  - `rangeEach` &mdash; Callback is executed a range number of times
  - `rangeMap` &mdash; Creates a range custom array
  - `rangeReduce` &mdash; Reduces a range array
  - `orderedPromiseAll` &mdash; Return array with all promises resolved in order, one after another

- **Events**

  - `dispatchEvent` &mdash; Dispatches custom event
  - `addOnHistoryChangeEvent` &mdash; Disptaches custom event on every history change

- **Api**

  - `fetchApi` &mdash; Enables for ease use of fetch on node and browser, woth options for generating query string and prefix

- **Browser**
  - `isBrowser` &mdash; Detects if code is running in a browser
  - `domReady` &mdash; Runs function when content is rendered
  - `addOnHistoryChangeCallback` &mdash; Calls custom funtion on every history change
