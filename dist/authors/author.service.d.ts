import { Repository } from "typeorm";
import { AuthorEntity } from "./author.entity";
import { CreateAuthorDTO } from "./dto/create-author.dto";
import { UpdateAuthorDTO } from "./dto/update-author.dto";
export declare class AuthorService {
    private authorRepository;
    constructor(authorRepository: Repository<AuthorEntity>);
    find(): Promise<AuthorEntity[]>;
    findOne(id: number): Promise<AuthorEntity>;
    create(payload: CreateAuthorDTO): Promise<AuthorEntity>;
    update(id: number, payload: UpdateAuthorDTO): Promise<AuthorEntity & UpdateAuthorDTO>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
