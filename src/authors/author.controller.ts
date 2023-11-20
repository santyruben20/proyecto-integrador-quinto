import { Controller, Get, Post, Put, Param, Delete, Body, ParseIntPipe } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthorService } from "./author.service";
import { CreateAuthorDTO } from "./dto/create-author.dto";
import { UpdateAuthorDTO } from "./dto/update-author.dto";

@ApiTags('Author Module')
@Controller('author')
export class AuthorController {

    constructor(private readonly authorService: AuthorService) {
    }

    @ApiOperation({ description: 'Buscar autores', summary: 'Find Authors' })
    @Get()
    async find() {
        const response = await this.authorService.find();
        return response;
    }

    @ApiOperation({ description: 'Buscar un autor por ID', summary: 'Find One Author' })
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const response = await this.authorService.findOne(id);
        return response;
    }

    @ApiOperation({ description: 'Agregar un autor', summary: 'Add Author' })
    @Post()
    async create(@Body() payload: CreateAuthorDTO) {
        const response = await this.authorService.create(payload);
        return response;
    }

    @ApiOperation({ description: 'Editar un autor', summary: 'Update Author' })
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateAuthorDTO) {
        const response = await this.authorService.update(id, payload);
        return { id, body: payload };
    }

    @ApiOperation({ description: 'Eliminar un autor', summary: 'Delete Author' })
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        const response = await this.authorService.delete(id);
        return response;
    }
}
