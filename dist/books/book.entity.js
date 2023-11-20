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
exports.BookEntity = void 0;
const author_entity_1 = require("../authors/author.entity");
const category_entity_1 = require("../categories/category.entity");
const publisher_entity_1 = require("../publishers/publisher.entity");
const typeorm_1 = require("typeorm");
let BookEntity = class BookEntity {
};
exports.BookEntity = BookEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BookEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title', type: 'varchar', length: 255, comment: 'Title of the book' }),
    __metadata("design:type", String)
], BookEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'publication_date', type: 'date', comment: 'Publication date of the book' }),
    __metadata("design:type", Date)
], BookEntity.prototype, "publicationDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => author_entity_1.AuthorEntity),
    (0, typeorm_1.JoinColumn)({ name: 'author_id' }),
    __metadata("design:type", author_entity_1.AuthorEntity)
], BookEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", category_entity_1.CategoryEntity)
], BookEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => publisher_entity_1.PublisherEntity),
    (0, typeorm_1.JoinColumn)({ name: 'publisher_id' }),
    __metadata("design:type", publisher_entity_1.PublisherEntity)
], BookEntity.prototype, "publisher", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'language', type: 'varchar', length: 50, comment: 'Language of the book' }),
    __metadata("design:type", String)
], BookEntity.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pages', type: 'integer', comment: 'Number of pages in the book' }),
    __metadata("design:type", Number)
], BookEntity.prototype, "pages", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', type: 'text', comment: 'Description of the book' }),
    __metadata("design:type", String)
], BookEntity.prototype, "description", void 0);
exports.BookEntity = BookEntity = __decorate([
    (0, typeorm_1.Entity)('books')
], BookEntity);
//# sourceMappingURL=book.entity.js.map