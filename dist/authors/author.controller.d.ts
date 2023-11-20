import { AuthorService } from "./author.service";
import { CreateAuthorDTO } from "./dto/create-author.dto";
import { UpdateAuthorDTO } from "./dto/update-author.dto";
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    find(): Promise<import("./author.entity").AuthorEntity[]>;
    findOne(id: number): Promise<import("./author.entity").AuthorEntity>;
    create(payload: CreateAuthorDTO): Promise<import("./author.entity").AuthorEntity>;
    update(id: number, payload: UpdateAuthorDTO): Promise<{
        id: number;
        body: UpdateAuthorDTO;
    }>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
