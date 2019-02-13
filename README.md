array-prefer
----------

[![Build Status](https://travis-ci.org/DrPaulBrewer/array-prefer.svg?branch=master)](https://travis-ci.org/DrPaulBrewer/array-prefer)
[![Coverage Status](https://coveralls.io/repos/github/DrPaulBrewer/array-prefer/badge.svg?branch=master)](https://coveralls.io/github/DrPaulBrewer/array-prefer?branch=master)

Returns a copy of the input array, with preferred items moved to the front.

## Installation

`npm i array-prefer -S`

## Dependencies

None.  Suitable for usage on nodejs or on the browser, via browserify/webpack.

## Initialization

`const arrayPrefer = require('array-prefer');`

## Usage

`const outArray = arrayPrefer(inArray, hasPriority, limit); `

`inArray` an input array of items (required)

`hasPriority` a function that returns truthy or falsey on items, indicating items that have priority (required)

`limit` an integer indicating the maximum number of items that may have priority (optional)

`outArray` a copy of `inArray` with items having priority moved to the front (lowest indexes).
Except for moving some items to the front of the array, the order of items is otherwise preserved.

## Examples

```

arrayPrefer([3,1,2], (x)=>(x<3)) // --> [1,2,3]

arrayPrefer([3,1,2], (x)=>(x<3), 0) // -->  [3,1,2]

arrayPrefer([3,1,2], (x)=>(x<3), 1) // --> [1,3,2]

arrayPrefer([3,1,2], (x)=>(x<3), 2) // --> [1,2,3]

```

### Copyright

Copyright 2019 Paul Brewer, Economic and Financial Technology Consulting LLC

### License

MIT
