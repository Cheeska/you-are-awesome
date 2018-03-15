// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};

const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property,{
        set: function(newValue) { property = newValue; },
        get: function() { return property; },
        enumerable : false
    });
    return property;
};

const createProtoMagicObject = () => {

    let newCow = function() {};

    newCow.prototype = newCow.__proto__;
    return newCow;
};

const incrementor = () => {};

const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {

};
const toBuffer = () => {};

const sortByProto = (arr) => {
    return arr.sort((a,b)=>(a.__proto__-b.__proto__));
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;