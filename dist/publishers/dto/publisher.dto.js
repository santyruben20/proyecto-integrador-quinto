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
exports.PublisherDTO = void 0;
const class_validator_1 = require("class-validator");
class PublisherDTO {
}
exports.PublisherDTO = PublisherDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PublisherDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Publisher name cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Publisher name must be a string' }),
    (0, class_validator_1.MaxLength)(255, { message: 'Publisher name must not exceed 255 characters' }),
    __metadata("design:type", String)
], PublisherDTO.prototype, "publisherName", void 0);
//# sourceMappingURL=publisher.dto.js.map