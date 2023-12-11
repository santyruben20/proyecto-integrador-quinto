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
exports.ReaderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reader_entity_1 = require("./reader.entity");
let ReaderService = class ReaderService {
    constructor(readerRepository) {
        this.readerRepository = readerRepository;
    }
    async find() {
        const readers = await this.readerRepository.find();
        return readers;
    }
    async findOne(id) {
        const reader = await this.readerRepository.findOne({ where: { id: id } });
        if (!reader) {
            throw new common_1.NotFoundException({ message: 'Lector no encontrado', error: 'No se ha encontrado' });
        }
        return reader;
    }
    async create(payload) {
        const newReader = this.readerRepository.create(payload);
        newReader.name = payload.name;
        newReader.phone = payload.phone;
        newReader.address = payload.address;
        const response = await this.readerRepository.save(newReader);
        return response;
    }
    async update(id, payload) {
        const reader = await this.findOne(id);
        reader.name = payload.name;
        reader.phone = payload.phone;
        reader.address = payload.address;
        if (!reader) {
            throw new common_1.NotFoundException({ message: 'El lector no existe', error: 'No encontrado' });
        }
        const updatedReader = Object.assign(reader, payload);
        const response = await this.readerRepository.save(updatedReader);
        return response;
    }
    async delete(id) {
        const reader = await this.findOne(id);
        if (!reader) {
            throw new common_1.NotFoundException({ message: 'El lector no existe', error: 'No encontrado' });
        }
        const response = await this.readerRepository.delete(id);
        return response;
    }
};
exports.ReaderService = ReaderService;
exports.ReaderService = ReaderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reader_entity_1.ReaderEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReaderService);
//# sourceMappingURL=reader.service.js.map