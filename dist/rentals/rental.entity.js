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
exports.RentalEntity = void 0;
const book_entity_1 = require("../books/book.entity");
const reader_entity_1 = require("../readers/reader.entity");
const typeorm_1 = require("typeorm");
let RentalEntity = class RentalEntity {
};
exports.RentalEntity = RentalEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RentalEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => reader_entity_1.ReaderEntity),
    (0, typeorm_1.JoinColumn)({ name: 'reader_id' }),
    __metadata("design:type", reader_entity_1.ReaderEntity)
], RentalEntity.prototype, "reader", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => book_entity_1.BookEntity),
    (0, typeorm_1.JoinColumn)({ name: 'book_id' }),
    __metadata("design:type", book_entity_1.BookEntity)
], RentalEntity.prototype, "book", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'departure_date', type: 'date', comment: 'Departure date of the rental' }),
    __metadata("design:type", Date)
], RentalEntity.prototype, "departureDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'entry_date', type: 'date', comment: 'Entry date of the rental' }),
    __metadata("design:type", Date)
], RentalEntity.prototype, "entryDate", void 0);
exports.RentalEntity = RentalEntity = __decorate([
    (0, typeorm_1.Entity)('rentals')
], RentalEntity);
//# sourceMappingURL=rental.entity.js.map