import { RentalService } from './rental.service';
import { UpdateRentalDTO } from './dto/update-rental.dto';
import { CreateRentalDTO } from './dto/create-rental.dto';
export declare class RentalController {
    private readonly rentalService;
    constructor(rentalService: RentalService);
    find(query: any): Promise<import("./rental.entity").RentalEntity[]>;
    findOne(id: number): Promise<import("./rental.entity").RentalEntity>;
    create(payload: CreateRentalDTO): Promise<import("./rental.entity").RentalEntity>;
    update(id: number, payload: UpdateRentalDTO): Promise<{
        id: number;
        body: UpdateRentalDTO;
    }>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
