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
exports.UpdateRentalDTO = void 0;
const class_validator_1 = require("class-validator");
const book_entity_1 = require("../../books/book.entity");
const reader_entity_1 = require("../../readers/reader.entity");
class UpdateRentalDTO {
}
exports.UpdateRentalDTO = UpdateRentalDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)({ message: 'Reader must be a valid object' }),
    __metadata("design:type", reader_entity_1.ReaderEntity)
], UpdateRentalDTO.prototype, "reader", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)({ message: 'Book must be a valid object' }),
    __metadata("design:type", book_entity_1.BookEntity)
], UpdateRentalDTO.prototype, "book", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Departure date cannot be empty' }),
    (0, class_validator_1.IsDate)({ message: 'Invalid departure date' }),
    __metadata("design:type", Date)
], UpdateRentalDTO.prototype, "departureDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Entry date cannot be empty' }),
    (0, class_validator_1.IsDate)({ message: 'Invalid entry date' }),
    __metadata("design:type", Date)
], UpdateRentalDTO.prototype, "entryDate", void 0);
//# sourceMappingURL=update-rental.dto.js.map