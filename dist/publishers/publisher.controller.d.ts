import { PublisherService } from "./publisher.service";
import { CreatePublisherDTO } from "./dto/create-publisher.dto";
import { UpdatePublisherDTO } from "./dto/update-publisher.dto";
export declare class PublisherController {
    private readonly publisherService;
    constructor(publisherService: PublisherService);
    find(): Promise<import("./publisher.entity").PublisherEntity[]>;
    findOne(id: number): Promise<import("./publisher.entity").PublisherEntity>;
    create(payload: CreatePublisherDTO): Promise<import("./publisher.entity").PublisherEntity>;
    update(id: number, payload: UpdatePublisherDTO): Promise<{
        id: number;
        body: UpdatePublisherDTO;
    }>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
