import { Repository } from "typeorm";
import { PublisherEntity } from "./publisher.entity";
import { CreatePublisherDTO } from "./dto/create-publisher.dto";
import { UpdatePublisherDTO } from "./dto/update-publisher.dto";
export declare class PublisherService {
    private publisherRepository;
    constructor(publisherRepository: Repository<PublisherEntity>);
    find(): Promise<PublisherEntity[]>;
    findOne(id: number): Promise<PublisherEntity>;
    create(payload: CreatePublisherDTO): Promise<PublisherEntity>;
    update(id: number, payload: UpdatePublisherDTO): Promise<PublisherEntity & UpdatePublisherDTO>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
