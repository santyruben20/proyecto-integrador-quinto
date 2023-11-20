import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';
import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    find(): Promise<import("./category.entity").CategoryEntity[]>;
    findOne(id: number): Promise<import("./category.entity").CategoryEntity>;
    create(payload: CreateCategoryDTO): Promise<import("./category.entity").CategoryEntity>;
    update(id: number, payload: UpdateCategoryDTO): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
