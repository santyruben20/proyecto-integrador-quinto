import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    //Patch,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
  import { CreateCategoryDTO } from './dto/create-category.dto';
  import { UpdateCategoryDTO } from './dto/update-category.dto';
  import { CategoryService } from './category.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  
  @ApiBearerAuth()
  @ApiTags('categories')
  @UseGuards(JwtAuthGuard) //seguridad en las rutas XD
  @Controller('categories')
  export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}
  
    //Metodo para buscar uno a mas registros paginados
    @ApiOperation({ summary: 'Find Categories' })
    @Get()
    async find() {
      const response = await this.categoryService.find();
      return response;
    }
  
    //Metodo para buscar un registro en particular
    @ApiOperation({ summary: 'Find One Categories' })
    @Get(':id')
    async findOne(@Param('id') id: number) {
      const response = await this.categoryService.findOne(id);
      return response;
    }
  
    //Metodo para crear
    @ApiOperation({ summary: 'Create Categories' })
    @Post()
    async create(@Body() payload: CreateCategoryDTO) {
      const response = await this.categoryService.create(payload);
  
      return response;
    }
  
    //Metodo para actualizar
    @ApiOperation({ summary: 'Update Categories' })
    @Put(':id')
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: UpdateCategoryDTO,
    ) {
      const response = await this.categoryService.update(id, payload);
      return response;
    }
  
    /**Metodo para actualizar parcialmente
    @ApiOperation({ summary: 'Change Categories State' })
    @Patch(':id')
    async changeState(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: ChangeStateCategoryDto,
    ) {
      const response = await this.categoryService.patch(id, payload);
      return response;
    }**/
  
    //Metodo para eliminar
    @ApiOperation({ summary: 'Delete Categories' })
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
      const response = await this.categoryService.delete(id);
      return response;
    }
  }