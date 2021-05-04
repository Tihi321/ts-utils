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
  - `swapObjectData` &mdash; Mapping through object keys and taking values form second object under same key

- **Functions**
  - `promisifyCallback` &mdash; Promisify functions that accept callback that will be called upon resolve, example wainting for message from api