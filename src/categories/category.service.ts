import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoriesRepository: Repository<CategoryEntity>,
  ) {}

  async find() {
    const categories = await this.categoriesRepository.find();
    return categories;
  }

  async findOne(id: number) {
    const category = await this.categoriesRepository.findOne({
      where: { id: id },
    });
    return category;
  }

  async create(payload: CreateCategoryDTO) {
    const newCategory = this.categoriesRepository.create();
    newCategory.categoryName = payload.categoryName;

    const response = await this.categoriesRepository.save(newCategory);
    return response;
  }

  async update(id: number, payload: UpdateCategoryDTO) {
    const category = await this.findOne(id);
    category.categoryName = payload.categoryName;


    const response = await this.categoriesRepository.update(id, category);
    return response;
  }

  async delete(id: number) {
    const category = await this.findOne(id);
    if (!category) {
      throw new NotFoundException();
    }
    const response = await this.categoriesRepository.delete(id);
    return response;
  }
}
  /**async patch(id: number, payload: ChangeStateCategoryDto) {
    const find = await this.findOne(id);

    const data = { ...find, ...payload };
    return await this.categoriesRepository.update(id, data);
  }
}
*/