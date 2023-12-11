import { BookEntity } from "./book.entity";
import { Repository } from "typeorm";
import { UpdateBookDTO } from "./dto/update-book.dto";
import { BookDTO } from "./dto/book.dto";
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: Repository<BookEntity>);
    find(): Promise<BookEntity[]>;
    findOne(id: number): Promise<BookEntity>;
    create(payload: BookDTO): Promise<BookEntity>;
    update(id: number, payload: UpdateBookDTO): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
