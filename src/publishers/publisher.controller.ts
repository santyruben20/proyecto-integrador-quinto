import { Controller, Get, Post, Put, Param, Delete, Body, ParseIntPipe } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { PublisherService } from "./publisher.service";
import { CreatePublisherDTO } from "./dto/create-publisher.dto";
import { UpdatePublisherDTO } from "./dto/update-publisher.dto";

@ApiTags('Publisher Module')
@Controller('publisher')
export class PublisherController {

    constructor(private readonly publisherService: PublisherService) {
    }

    @ApiOperation({ description: 'Buscar editoriales', summary: 'Find Publishers' })
    @Get()
    async find() {
        const response = await this.publisherService.find();
        return response;
    }

    @ApiOperation({ description: 'Buscar una editorial por ID', summary: 'Find One Publisher' })
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const response = await this.publisherService.findOne(id);
        return response;
    }

    @ApiOperation({ description: 'Agregar una editorial', summary: 'Add Publisher' })
    @Post()
    async create(@Body() payload: CreatePublisherDTO) {
        const response = await this.publisherService.create(payload);
        return response;
    }

    @ApiOperation({ description: 'Editar una editorial', summary: 'Update Publisher' })
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdatePublisherDTO) {
        const response = await this.publisherService.update(id, payload);
        return { id, body: payload };
    }

    @ApiOperation({ description: 'Eliminar una editorial', summary: 'Delete Publisher' })
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        const response = await this.publisherService.delete(id);
        return response;
    }
}
