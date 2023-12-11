import { ReaderService } from "./reader.service";
import { CreateReaderDTO } from "./dto/create-reader.dto";
import { UpdateReaderDTO } from "./dto/update-reader.dto";
export declare class ReaderController {
    private readonly readerService;
    constructor(readerService: ReaderService);
    find(): Promise<import("./reader.entity").ReaderEntity[]>;
    findOne(id: number): Promise<import("./reader.entity").ReaderEntity>;
    create(payload: CreateReaderDTO): Promise<import("./reader.entity").ReaderEntity>;
    update(id: number, payload: UpdateReaderDTO): Promise<{
        id: number;
        body: UpdateReaderDTO;
    }>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
