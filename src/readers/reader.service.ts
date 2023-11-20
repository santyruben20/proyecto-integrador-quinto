import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReaderEntity } from "./reader.entity";
import { CreateReaderDTO } from "./dto/create-reader.dto";
import { UpdateReaderDTO } from "./dto/update-reader.dto";

@Injectable()
export class ReaderService {
    constructor(
        @InjectRepository(ReaderEntity)
        private readerRepository: Repository<ReaderEntity>,
    ) {}

    async find() {
        const readers = await this.readerRepository.find();
        return readers;
    }

    async findOne(id: number) {
        const reader = await this.readerRepository.findOne({ where: { id: id } });
        if (!reader) {
            throw new NotFoundException({ message: 'Lector no encontrado', error: 'No se ha encontrado' });
        }
        return reader;
    }

    async create(payload: CreateReaderDTO) {
        const newReader = this.readerRepository.create(payload);
        newReader.name = payload.name;
        newReader.phone = payload.phone;
        newReader.address = payload.address;
        const response = await this.readerRepository.save(newReader);
        return response;
    }

    async update(id: number, payload: UpdateReaderDTO) {
        const reader = await this.findOne(id);
        reader.name = payload.name;
        reader.phone = payload.phone;
        reader.address = payload.address;
        if (!reader) {
            throw new NotFoundException({ message: 'El lector no existe', error: 'No encontrado' });
        }
        const updatedReader = Object.assign(reader, payload);
        const response = await this.readerRepository.save(updatedReader);
        return response;
    }

    async delete(id: number) {
        const reader = await this.findOne(id);
        if (!reader) {
            throw new NotFoundException({ message: 'El lector no existe', error: 'No encontrado' });
        }
        const response = await this.readerRepository.delete(id);
        return response;
    }
}
