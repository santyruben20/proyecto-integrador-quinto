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
exports.UpdateBookDTO = void 0;
const class_validator_1 = require("class-validator");
const author_entity_1 = require("../../authors/author.entity");
const category_entity_1 = require("../../categories/category.entity");
const publisher_entity_1 = require("../../publishers/publisher.entity");
class UpdateBookDTO {
}
exports.UpdateBookDTO = UpdateBookDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Title cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Title must be a string' }),
    (0, class_validator_1.MaxLength)(255, { message: 'Title must not exceed 255 characters' }),
    __metadata("design:type", String)
], UpdateBookDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Publication date cannot be empty' }),
    (0, class_validator_1.IsDate)({ message: 'Invalid publication date' }),
    __metadata("design:type", Date)
], UpdateBookDTO.prototype, "publicationDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)({ message: 'Author must be a valid object' }),
    __metadata("design:type", author_entity_1.AuthorEntity)
], UpdateBookDTO.prototype, "author", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)({ message: 'Category must be a valid object' }),
    __metadata("design:type", category_entity_1.CategoryEntity)
], UpdateBookDTO.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)({ message: 'Publisher must be a valid object' }),
    __metadata("design:type", publisher_entity_1.PublisherEntity)
], UpdateBookDTO.prototype, "publisher", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Language cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Language must be a string' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Language must not exceed 50 characters' }),
    __metadata("design:type", String)
], UpdateBookDTO.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Number of pages cannot be empty' }),
    (0, class_validator_1.IsInt)({ message: 'Number of pages must be an integer' }),
    (0, class_validator_1.Min)(1, { message: 'Number of pages must be at least 1' }),
    (0, class_validator_1.Max)(9999, { message: 'Number of pages must not exceed 9999' }),
    __metadata("design:type", Number)
], UpdateBookDTO.prototype, "pages", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Description cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Description must be a string' }),
    __metadata("design:type", String)
], UpdateBookDTO.prototype, "description", void 0);
//# sourceMappingURL=update-book.dto.js.map