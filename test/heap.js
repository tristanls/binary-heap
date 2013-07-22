/*

test.js - heap test

The MIT License (MIT)

Copyright (c) 2013 Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

"use strict";

var Heap = require('../index.js');

var test = module.exports = {};

test['new heap has size 0'] = function (test) {
    test.expect(1);
    test.equal(new Heap().size(), 0);
    test.done();
};

test['new heap can be initialized with an array of values'] = function (test) {
    test.expect(1);
    test.deepEqual(new Heap({heap: [1,2,3]}).dump(), [1,2,3]);
    test.done();
};

test['new heap initialized with an array has the size of the array'] = function (test) {
    test.expect(1);
    test.equal(new Heap({heap: [3,2,1]}).size(), 3);
    test.done();
};

test['new heap can be built using build() which will build a heap from an array'] = function (test) {
    test.expect(1);
    test.deepEqual(Heap.build({heap: [4,1,3,2,16,9,10,14,8,7]}).dump(), [16,14,10,8,7,9,3,2,4,1]);
    test.done();
};