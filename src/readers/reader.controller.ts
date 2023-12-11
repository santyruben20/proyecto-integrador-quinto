import { Controller, Get, Post, Put, Param, Delete, Body, ParseIntPipe, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ReaderService } from "./reader.service";
import { CreateReaderDTO } from "./dto/create-reader.dto";
import { UpdateReaderDTO } from "./dto/update-reader.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@ApiBearerAuth()
@ApiTags('Reader Module')
@UseGuards(JwtAuthGuard) //seguridad en las rutas XD
@Controller('reader')
export class ReaderController {

    constructor(private readonly readerService: ReaderService) {
    }

    @ApiOperation({ description: 'Buscar lectores', summary: 'Find Readers' })
    @Get()
    async find() {
        const response = await this.readerService.find();
        return response;
    }

    @ApiOperation({ description: 'Buscar un lector por ID', summary: 'Find One Reader' })
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const response = await this.readerService.findOne(id);
        return response;
    }

    @ApiOperation({ description: 'Agregar un lector', summary: 'Add Reader' })
    @Post()
    async create(@Body() payload: CreateReaderDTO) {
        const response = await this.readerService.create(payload);
        return response;
    }

    @ApiOperation({ description: 'Editar un lector', summary: 'Update Reader' })
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateReaderDTO) {
        const response = await this.readerService.update(id, payload);
        return { id, body: payload };
    }

    @ApiOperation({ description: 'Eliminar un lector', summary: 'Delete Reader' })
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        const response = await this.readerService.delete(id);
        return response;
    }
}
