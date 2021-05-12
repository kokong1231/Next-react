"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fuse_js_1 = __importDefault(require("fuse.js"));
function search(dataToSearch, basedOnOptionsKey, searchByValue = '') {
    if (searchByValue.trim()) {
        let fuse = new fuse_js_1.default(dataToSearch, {
            keys: basedOnOptionsKey,
            minMatchCharLength: 2,
            threshold: 0.3,
        });
        let result = fuse.search(searchByValue).map((r) => r.item);
        return result;
    }
    return dataToSearch;
}
exports.default = search;
//# sourceMappingURL=search.js.map