(function () {

  class DOM {
    constructor(elements) {
      this.element = document.querySelectorAll(elements);
       if(this.element.length === 1 )
         return this.get(); 
    }
    static isArray(param) {
      return Object.prototype.toString.call(param) === '[object Array]';
    }
    static isObject(param) {
      return Object.prototype.toString.call(param) === '[object Object]';
    }
    static isFunction(param) {
      return Object.prototype.toString.call(param) === '[object Function]';
    }
    static isNumber(param) {
      return Object.prototype.toString.call(param) === '[object Number]';
    }
    static isString(param) {
      return Object.prototype.toString.call(param) === '[object String]';
    }
    static isBoolean(param) {
      return Object.prototype.toString.call(param) === '[object Boolean]';
    }
    static isNull(param) {
      return Object.prototype.toString.call(param) === '[object Null]' ||
        Object.prototype.toString.call(param) === '[object Undefined]';
    }
    on(eventType, callback) {
      this.element.forEach(function (element) {
        element.addEventListener(eventType, callback, false);
      });
    }
    off(eventType, callback) {
      this.element.forEach(function (element) {
        element.removeEventListener(eventType, callback);
      });
    }
    get() {
      return this.element;
    }
    forEach() {
      return Array.prototype.forEach.apply(this.element, arguments);
    }
    map() {
      return Array.prototype.map.apply(this.element, arguments);
    }
    filter() {
      return Array.prototype.filter.apply(this.element, arguments);
    }
    reduce() {
      return Array.prototype.reduce.apply(this.element, arguments);
    }
    reduceRight() {
      return Array.prototype.reduceRight.apply(this.element, arguments);
    }
    every() {
      return Array.prototype.every.apply(this.element, arguments);
    }
    some() {
      return Array.prototype.some.apply(this.element, arguments);
    }
  }
