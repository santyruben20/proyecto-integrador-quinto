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
exports.ReaderEntity = void 0;
const typeorm_1 = require("typeorm");
let ReaderEntity = class ReaderEntity {
};
exports.ReaderEntity = ReaderEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ReaderEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar', length: 255, comment: 'Name of the reader' }),
    __metadata("design:type", String)
], ReaderEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone', type: 'varchar', length: 20, comment: 'Phone number of the reader' }),
    __metadata("design:type", String)
], ReaderEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'address', type: 'varchar', length: 255, comment: 'Address of the reader' }),
    __metadata("design:type", String)
], ReaderEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'postal_code', type: 'varchar', length: 15, comment: 'Postal code of the reader' }),
    __metadata("design:type", String)
], ReaderEntity.prototype, "postalCode", void 0);
exports.ReaderEntity = ReaderEntity = __decorate([
    (0, typeorm_1.Entity)('readers')
], ReaderEntity);
//# sourceMappingURL=reader.entity.js.map