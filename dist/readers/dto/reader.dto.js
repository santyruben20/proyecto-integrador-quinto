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
exports.ReaderDTO = void 0;
const class_validator_1 = require("class-validator");
class ReaderDTO {
}
exports.ReaderDTO = ReaderDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Reader name cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Reader name must be a string' }),
    (0, class_validator_1.MaxLength)(255, { message: 'Reader name must not exceed 255 characters' }),
    __metadata("design:type", String)
], ReaderDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Phone number cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Phone number must be a string' }),
    (0, class_validator_1.MaxLength)(20, { message: 'Phone number must not exceed 20 characters' }),
    __metadata("design:type", String)
], ReaderDTO.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Address cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Address must be a string' }),
    (0, class_validator_1.MaxLength)(255, { message: 'Address must not exceed 255 characters' }),
    __metadata("design:type", String)
], ReaderDTO.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Postal code cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Postal code must be a string' }),
    (0, class_validator_1.MaxLength)(15, { message: 'Postal code must not exceed 15 characters' }),
    __metadata("design:type", String)
], ReaderDTO.prototype, "postalCode", void 0);
//# sourceMappingURL=reader.dto.js.map