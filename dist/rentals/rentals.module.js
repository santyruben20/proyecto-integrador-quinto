"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalsModule = void 0;
const common_1 = require("@nestjs/common");
const rental_entity_1 = require("./rental.entity");
const rental_controller_1 = require("./rental.controller");
const typeorm_1 = require("@nestjs/typeorm");
const rental_service_1 = require("./rental.service");
let RentalsModule = class RentalsModule {
};
exports.RentalsModule = RentalsModule;
exports.RentalsModule = RentalsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([rental_entity_1.RentalEntity])],
        controllers: [rental_controller_1.RentalController],
        providers: [rental_service_1.RentalService]
    })
], RentalsModule);
//# sourceMappingURL=rentals.module.js.map