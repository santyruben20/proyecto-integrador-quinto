import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';
export declare class CategoryService {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<CategoryEntity>);
    find(): Promise<CategoryEntity[]>;
    findOne(id: number): Promise<CategoryEntity>;
    create(payload: CreateCategoryDTO): Promise<CategoryEntity>;
    update(id: number, payload: UpdateCategoryDTO): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
