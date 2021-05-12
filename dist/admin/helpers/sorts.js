"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByLowestNumber = exports.sortByHighestNumber = void 0;
const sortByHighestNumber = (arrOfObj, key) => {
    return arrOfObj.sort(function (a, b) {
        return b[key] - a[key];
    });
};
exports.sortByHighestNumber = sortByHighestNumber;
const sortByLowestNumber = (arrOfObj, key) => {
    return arrOfObj.sort(function (a, b) {
        return a[key] - b[key];
    });
};
exports.sortByLowestNumber = sortByLowestNumber;
//# sourceMappingURL=sorts.js.map