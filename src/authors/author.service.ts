import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthorEntity } from "./author.entity";
import { CreateAuthorDTO } from "./dto/create-author.dto";
import { UpdateAuthorDTO } from "./dto/update-author.dto";

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(AuthorEntity)
        private authorRepository: Repository<AuthorEntity>,
    ) {}

    async find() {
        const authors = await this.authorRepository.find();
        return authors;
    }

    async findOne(id: number) {
        const author = await this.authorRepository.findOne({ where: { id: id } });
        if (!author) {
            throw new NotFoundException({ message: 'Autor no encontrado', error: 'No se ha encontrado' });
        }
        return author;
    }

    async create(payload: CreateAuthorDTO) {
        const newAuthor = this.authorRepository.create(payload);
        newAuthor.authorName = payload.authorName;
        const response =  this.authorRepository.save(newAuthor);
        return response;
    }

    async update(id: number, payload: UpdateAuthorDTO) {
        const author = await this.findOne(id);
        author.authorName = payload.authorName;
        if (!author) {
            throw new NotFoundException({ message: 'El autor no existe', error: 'No encontrado' });
        }
        const updatedAuthor = Object.assign(author, payload);
        const response = await this.authorRepository.save(updatedAuthor);
        return response;
    }

    async delete(id: number) {
        const author = await this.findOne(id);
        if (!author) {
            throw new NotFoundException({ message: 'El autor no existe', error: 'No encontrado' });
        }
        const response = await this.authorRepository.delete(id);
        return response;
    }
}
