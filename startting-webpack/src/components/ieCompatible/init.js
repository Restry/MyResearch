 
     //ie 6 7 8
    //  if (navigator.userAgent.indexOf("MSIE 6.0") > 0 ||
    //      navigator.userAgent.indexOf("MSIE 7.0") > 0 ||
    //      (navigator.userAgent.indexOf("MSIE 9.0") > 0 && !window.innerWidth)) {
    //      alert("ie attached ");

         require("file?name=js/lib/[name].[ext]!./lib/json2.min.js");
         require("file?name=js/lib/[name].[ext]!./lib/respond.min.js");
         require("file?name=js/lib/[name].[ext]!./lib/html5shiv.js");

    //  }
 
if (!Object.keys) {
    Object.keys = (function() {
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !({
                toString: null
            }).propertyIsEnumerable('toString'),
            dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
            dontEnumsLength = dontEnums.length;

        return function(obj) {
            if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

            var result = [];

            for (var prop in obj) {
                if (hasOwnProperty.call(obj, prop)) result.push(prop);
            }

            if (hasDontEnumBug) {
                for (var i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
                }
            }
            return result;
        }
    })()
};
if (!Array.prototype.every) {
    Array.prototype.every = function(fun /*, thisArg */ ) {
        'use strict';

        if (this === void 0 || this === null)
            throw new TypeError();

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== 'function')
            throw new TypeError();

        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t && !fun.call(thisArg, t[i], i, t))
                return false;
        }

        return true;
    };
}
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

  Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| 
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal 
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let A be a new array created as if by the expression new Array(len) 
    //    where Array is the standard built-in constructor with that name and 
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal 
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal 
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal 
        //     method of callback with T as the this value and argument 
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}
if (!Array.prototype.filter){
    Array.prototype.filter = function(fun /*, thisArg */){
        "use strict";
        if (this === void 0 || this === null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();
        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++){
            if (i in t){
                var val = t[i];
                if (fun.call(thisArg, val, i, t))
                res.push(val);
            }
        }
        return res;
    };
}
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, 
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
                                 ? this
                                 : oThis || window,
                               aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}
if(!Array.indexOf){
    Array.prototype.indexOf = function(obj){              
        for(var i=0; i<this.length; i++){
            if(this[i]==obj){
                return i;
            }
        }
        return -1;
    }
}
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {  
    Array.prototype.forEach = function(fun /*, thisp*/){  
        var len = this.length;  
        if (typeof fun != "function")  
            throw new TypeError();  
        var thisp = arguments[1];  
        for (var i = 0; i < len; i++){  
            if (i in this)  
                fun.call(thisp, this[i], i, this);  
        }  
    };  
}
if (!Array.prototype.some){
  Array.prototype.some = function(fun /*, thisArg */)  {
    'use strict';
    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function')
      throw new TypeError();

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t && fun.call(thisArg, t[i], i, t))
        return true;
    }

    return false;
  };
}
if (!window.getComputedStyle) {
    window.getComputedStyle = function(el, pseudo) {
        this.el = el;
        this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
                prop = prop.replace(re, function () {
                    return arguments[2].toUpperCase();
                });
            }
            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        }
        return this;
    }
}
if (typeof Object.assign != 'function') {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

 module.exports = {};