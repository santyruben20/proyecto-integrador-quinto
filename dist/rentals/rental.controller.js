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
exports.RentalController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const rental_service_1 = require("./rental.service");
const update_rental_dto_1 = require("./dto/update-rental.dto");
const create_rental_dto_1 = require("./dto/create-rental.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let RentalController = class RentalController {
    constructor(rentalService) {
        this.rentalService = rentalService;
    }
    async find(query) {
        const response = await this.rentalService.find();
        return response;
    }
    async findOne(id) {
        const response = await this.rentalService.findOne(id);
        return response;
    }
    async create(payload) {
        const response = await this.rentalService.create(payload);
        return response;
    }
    async update(id, payload) {
        const response = await this.rentalService.update(id, payload);
        return { id, body: payload };
    }
    async delete(id) {
        const response = await this.rentalService.delete(id);
        return response;
    }
};
exports.RentalController = RentalController;
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Buscar Libros', summary: 'Find Books' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RentalController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Buscar un Libro', summary: 'Find One Book' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RentalController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Agregar Libro', summary: 'Add Book' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rental_dto_1.CreateRentalDTO]),
    __metadata("design:returntype", Promise)
], RentalController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Editar Libros', summary: 'Update Books' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_rental_dto_1.UpdateRentalDTO]),
    __metadata("design:returntype", Promise)
], RentalController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Buscar Libros', summary: 'Delete Books' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RentalController.prototype, "delete", null);
exports.RentalController = RentalController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('rentals'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('rentals'),
    __metadata("design:paramtypes", [rental_service_1.RentalService])
], RentalController);
//# sourceMappingURL=rental.controller.js.map