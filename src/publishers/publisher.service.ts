import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PublisherEntity } from "./publisher.entity";
import { CreatePublisherDTO } from "./dto/create-publisher.dto";
import { UpdatePublisherDTO } from "./dto/update-publisher.dto";

@Injectable()
export class PublisherService {
    constructor(
        @InjectRepository(PublisherEntity)
        private publisherRepository: Repository<PublisherEntity>,
    ) {}

    async find() {
        const publishers = await this.publisherRepository.find();
        return publishers;
    }

    async findOne(id: number) {
        const publisher = await this.publisherRepository.findOne({ where: { id: id } });
        if (!publisher) {
            throw new NotFoundException({ message: 'Editorial no encontrada', error: 'No se ha encontrado' });
        }
        return publisher;
    }

    async create(payload: CreatePublisherDTO) {
        const newPublisher = this.publisherRepository.create(payload);
        newPublisher.publisherName = payload.publisherName;
        const response = await this.publisherRepository.save(newPublisher);
        return response;
    }

    async update(id: number, payload: UpdatePublisherDTO) {
        const publisher = await this.findOne(id);
        publisher.publisherName = payload.publisherName;
        if (!publisher) {
            throw new NotFoundException({ message: 'La editorial no existe', error: 'No encontrado' });
        }
        const updatedPublisher = Object.assign(publisher, payload);
        const response = await this.publisherRepository.save(updatedPublisher);
        return response;
    }

    async delete(id: number) {
        const publisher = await this.findOne(id);
        if (!publisher) {
            throw new NotFoundException({ message: 'La editorial no existe', error: 'No encontrado' });
        }
        const response = await this.publisherRepository.delete(id);
        return response;
    }
}
