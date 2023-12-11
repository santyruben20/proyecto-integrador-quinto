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
exports.RentalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rental_entity_1 = require("./rental.entity");
let RentalService = class RentalService {
    constructor(rentalRepository) {
        this.rentalRepository = rentalRepository;
    }
    async find() {
        const rentals = await this.rentalRepository.find();
        return rentals;
    }
    async findOne(id) {
        const rental = await this.rentalRepository.findOne({ where: { id: id } });
        if (!rental) {
            throw new common_1.NotFoundException({ message: 'Alquiler no encontrado', error: 'No se ha encontrado' });
        }
        return rental;
    }
    create(payload) {
        const newRental = this.rentalRepository.create();
        newRental.reader = payload.reader;
        newRental.book = payload.book;
        newRental.departureDate = payload.departureDate;
        newRental.entryDate = payload.entryDate;
        const response = this.rentalRepository.save(newRental);
        return response;
    }
    async update(id, payload) {
        const Rental = await this.findOne(id);
        Rental.reader = payload.reader;
        Rental.book = payload.book;
        Rental.departureDate = payload.departureDate;
        Rental.entryDate = payload.entryDate;
        if (!Rental) {
            throw new common_1.NotFoundException({ message: 'Alquiler no encontrado', error: 'No encontrado' });
        }
        const response = await this.rentalRepository.update(id, Rental);
        return response;
    }
    async delete(id) {
        const Rental = await this.findOne(id);
        if (!Rental) {
            throw new common_1.NotFoundException({ message: 'Alquiler no encontrado', error: 'No encontrado' });
        }
        const response = await this.rentalRepository.delete(id);
        return response;
    }
};
exports.RentalService = RentalService;
exports.RentalService = RentalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rental_entity_1.RentalEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RentalService);
//# sourceMappingURL=rental.service.js.map