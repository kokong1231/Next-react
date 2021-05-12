"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
let AddCategoryInput = class AddCategoryInput {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", String)
], AddCategoryInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddCategoryInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ defaultValue: null }),
    __metadata("design:type", String)
], AddCategoryInput.prototype, "value", void 0);
__decorate([
    type_graphql_1.Field({ defaultValue: null }),
    __metadata("design:type", String)
], AddCategoryInput.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], AddCategoryInput.prototype, "icon", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], AddCategoryInput.prototype, "slug", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], AddCategoryInput.prototype, "creation_date", void 0);
AddCategoryInput = __decorate([
    type_graphql_1.InputType({ description: 'New Category Data' })
], AddCategoryInput);
exports.default = AddCategoryInput;
//# sourceMappingURL=category.input_type.js.map