import { Repository } from "typeorm";
import { RentalEntity } from "./rental.entity";
import { RentalDTO } from "./dto/rental.dto";
import { UpdateRentalDTO } from "./dto/update-rental.dto";
export declare class RentalService {
    private rentalRepository;
    constructor(rentalRepository: Repository<RentalEntity>);
    find(): Promise<RentalEntity[]>;
    findOne(id: number): Promise<RentalEntity>;
    create(payload: RentalDTO): Promise<RentalEntity>;
    update(id: number, payload: UpdateRentalDTO): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
