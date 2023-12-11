import { BookService } from './book.service';
import { CreateBookDTO } from "./dto/create-book.dto";
import { UpdateBookDTO } from './dto/update-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    find(query: any): Promise<import("./book.entity").BookEntity[]>;
    findOne(id: number): Promise<import("./book.entity").BookEntity>;
    create(payload: CreateBookDTO): Promise<import("./book.entity").BookEntity>;
    update(id: number, payload: UpdateBookDTO): Promise<{
        id: number;
        body: UpdateBookDTO;
    }>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
