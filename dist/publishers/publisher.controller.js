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
exports.PublisherController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const publisher_service_1 = require("./publisher.service");
const create_publisher_dto_1 = require("./dto/create-publisher.dto");
const update_publisher_dto_1 = require("./dto/update-publisher.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let PublisherController = class PublisherController {
    constructor(publisherService) {
        this.publisherService = publisherService;
    }
    async find() {
        const response = await this.publisherService.find();
        return response;
    }
    async findOne(id) {
        const response = await this.publisherService.findOne(id);
        return response;
    }
    async create(payload) {
        const response = await this.publisherService.create(payload);
        return response;
    }
    async update(id, payload) {
        const response = await this.publisherService.update(id, payload);
        return { id, body: payload };
    }
    async delete(id) {
        const response = await this.publisherService.delete(id);
        return response;
    }
};
exports.PublisherController = PublisherController;
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Buscar editoriales', summary: 'Find Publishers' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PublisherController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Buscar una editorial por ID', summary: 'Find One Publisher' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PublisherController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Agregar una editorial', summary: 'Add Publisher' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_publisher_dto_1.CreatePublisherDTO]),
    __metadata("design:returntype", Promise)
], PublisherController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Editar una editorial', summary: 'Update Publisher' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_publisher_dto_1.UpdatePublisherDTO]),
    __metadata("design:returntype", Promise)
], PublisherController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Eliminar una editorial', summary: 'Delete Publisher' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PublisherController.prototype, "delete", null);
exports.PublisherController = PublisherController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Publisher Module'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('publisher'),
    __metadata("design:paramtypes", [publisher_service_1.PublisherService])
], PublisherController);
//# sourceMappingURL=publisher.controller.js.map