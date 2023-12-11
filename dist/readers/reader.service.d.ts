import { Repository } from "typeorm";
import { ReaderEntity } from "./reader.entity";
import { CreateReaderDTO } from "./dto/create-reader.dto";
import { UpdateReaderDTO } from "./dto/update-reader.dto";
export declare class ReaderService {
    private readerRepository;
    constructor(readerRepository: Repository<ReaderEntity>);
    find(): Promise<ReaderEntity[]>;
    findOne(id: number): Promise<ReaderEntity>;
    create(payload: CreateReaderDTO): Promise<ReaderEntity>;
    update(id: number, payload: UpdateReaderDTO): Promise<ReaderEntity & UpdateReaderDTO>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
