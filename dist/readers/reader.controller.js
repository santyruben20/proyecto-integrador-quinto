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
exports.ReaderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const reader_service_1 = require("./reader.service");
const create_reader_dto_1 = require("./dto/create-reader.dto");
const update_reader_dto_1 = require("./dto/update-reader.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ReaderController = class ReaderController {
    constructor(readerService) {
        this.readerService = readerService;
    }
    async find() {
        const response = await this.readerService.find();
        return response;
    }
    async findOne(id) {
        const response = await this.readerService.findOne(id);
        return response;
    }
    async create(payload) {
        const response = await this.readerService.create(payload);
        return response;
    }
    async update(id, payload) {
        const response = await this.readerService.update(id, payload);
        return { id, body: payload };
    }
    async delete(id) {
        const response = await this.readerService.delete(id);
        return response;
    }
};
exports.ReaderController = ReaderController;
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Buscar lectores', summary: 'Find Readers' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReaderController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Buscar un lector por ID', summary: 'Find One Reader' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReaderController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Agregar un lector', summary: 'Add Reader' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reader_dto_1.CreateReaderDTO]),
    __metadata("design:returntype", Promise)
], ReaderController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Editar un lector', summary: 'Update Reader' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_reader_dto_1.UpdateReaderDTO]),
    __metadata("design:returntype", Promise)
], ReaderController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Eliminar un lector', summary: 'Delete Reader' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReaderController.prototype, "delete", null);
exports.ReaderController = ReaderController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Reader Module'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('reader'),
    __metadata("design:paramtypes", [reader_service_1.ReaderService])
], ReaderController);
//# sourceMappingURL=reader.controller.js.map