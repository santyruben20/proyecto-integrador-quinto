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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const book_entity_1 = require("./book.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let BookService = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async find() {
        const books = await this.bookRepository.find();
        return books;
    }
    async findOne(id) {
        const book = await this.bookRepository.findOne({ where: { id: id } });
        if (!book) {
            throw new common_1.NotFoundException({ message: 'Libro no encontrado', error: 'No se ha encontrado' });
        }
        return book;
    }
    create(payload) {
        const newBook = this.bookRepository.create();
        newBook.id = payload.id;
        newBook.title = payload.title;
        newBook.publicationDate = payload.publicationDate;
        newBook.author = payload.author;
        newBook.category = payload.category;
        newBook.publisher = payload.publisher;
        newBook.language = payload.language;
        newBook.pages = payload.pages;
        newBook.description = payload.description;
        const response = this.bookRepository.save(newBook);
        return response;
    }
    async update(id, payload) {
        const Book = await this.findOne(id);
        Book.title = payload.title;
        Book.publicationDate = payload.publicationDate;
        Book.author = payload.author;
        Book.category = payload.category;
        Book.publisher = payload.publisher;
        Book.language = payload.language;
        Book.pages = payload.pages;
        Book.description = payload.description;
        if (!Book) {
            throw new common_1.NotFoundException({ message: 'Libro no encontrado', error: 'No encontrado' });
        }
        const response = await this.bookRepository.update(id, Book);
        return response;
    }
    async delete(id) {
        const Book = await this.findOne(id);
        if (!Book) {
            throw new common_1.NotFoundException({ message: 'Libro no encontrado', error: 'No encontrado' });
        }
        const response = await this.bookRepository.delete(id);
        return response;
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.BookEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BookService);
//# sourceMappingURL=book.service.js.map