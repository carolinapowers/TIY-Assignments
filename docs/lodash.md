### [`_.every`](http://lodash.com/docs#every)

* _params:_
  * `Array`|`Object`|`String` `collection` to iterate over
  * `Function`|`Object`|`String` `predicate` considered for each iteration
    * a callback `Function`
      * is invoked with: `value`, `index`|`key`, `collection`
      * should return `Boolean` whether iteration passes `predicate`
    * an `Object` is compared like [`_.matches`](http://lodash.com/docs#matches)
    * a `String` is compared like [`_.property`](http://lodash.com/docs#property)
  * `thisArg` binding for `predicate`
* _returns:_
  * `Boolean` whether `predicate` passes for every `value` in `collection`
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String` or `Function`

### [`_.reject`](https://lodash.com/docs#reject)

* _params:_
  * `Array`|`Object`|`String` `collection` to iterate over
* _arguments_` Collection (Array|Object|string): The collection to iterate over.
               [predicate=_.identity] (Function|Object|string): The function invoked per iteration. If a property name or object is provided it is used to create a ".property" or ".matches" style callback respectively.
               [thisArg] (*): The this binding of predicate.`
    * an `Object` is compared like [`_.matches`](http://lodash.com/docs#matches)
    * a `String` is compared like [`_.property`](http://lodash.com/docs#property)
  * `thisArg` binding for `predicate`
* _returns:_
  * `(Array): Returns the new filtered array. This method returns the elements of collection that predicate does not return truthy for. `
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String` or `Function`
  
  ### [`_.where`](https://lodash.com/docs#where)
* _params:_
   `Array`|`Object`|`String` `collection` `Deep comparison between each element in collection and the source object.'
* _arguments:_
    `Collection (Array|Object|string): The collection to search.
    `Source (Object): The object of property values to match.`
* _returns:_
  * `(Array): Returns the new filtered array.`
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String` or `Function`
  
  
  ### [`_.chunk`](https://lodash.com/docs#pop)
  * _params:_
   `Array`|
* _arguments:_
    `array (Array): The array to process.`
    `[size=1] (numer): The length of each chunk.`
* _returns:_
  * `(Array): Returns the new array containing chunks.`
* _differences:_

  