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
exports.AuthorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const author_service_1 = require("./author.service");
const create_author_dto_1 = require("./dto/create-author.dto");
const update_author_dto_1 = require("./dto/update-author.dto");
let AuthorController = class AuthorController {
    constructor(authorService) {
        this.authorService = authorService;
    }
    async find() {
        const response = await this.authorService.find();
        return response;
    }
    async findOne(id) {
        const response = await this.authorService.findOne(id);
        return response;
    }
    async create(payload) {
        const response = await this.authorService.create(payload);
        return response;
    }
    async update(id, payload) {
        const response = await this.authorService.update(id, payload);
        return { id, body: payload };
    }
    async delete(id) {
        const response = await this.authorService.delete(id);
        return response;
    }
};
exports.AuthorController = AuthorController;
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Buscar autores', summary: 'Find Authors' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Buscar un autor por ID', summary: 'Find One Author' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Agregar un autor', summary: 'Add Author' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_author_dto_1.CreateAuthorDTO]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Editar un autor', summary: 'Update Author' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_author_dto_1.UpdateAuthorDTO]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Eliminar un autor', summary: 'Delete Author' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "delete", null);
exports.AuthorController = AuthorController = __decorate([
    (0, swagger_1.ApiTags)('Author Module'),
    (0, common_1.Controller)('author'),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorController);
//# sourceMappingURL=author.controller.js.map