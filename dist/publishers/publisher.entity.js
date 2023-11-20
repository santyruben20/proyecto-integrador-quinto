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
exports.PublisherEntity = void 0;
const typeorm_1 = require("typeorm");
let PublisherEntity = class PublisherEntity {
};
exports.PublisherEntity = PublisherEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PublisherEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'publisher_name', type: 'varchar', length: 255, comment: 'Name of the publisher' }),
    __metadata("design:type", String)
], PublisherEntity.prototype, "publisherName", void 0);
exports.PublisherEntity = PublisherEntity = __decorate([
    (0, typeorm_1.Entity)('publishers')
], PublisherEntity);
//# sourceMappingURL=publisher.entity.js.map