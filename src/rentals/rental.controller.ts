import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { RentalService } from './rental.service';
import { UpdateRentalDTO } from './dto/update-rental.dto';
import { CreateRentalDTO } from './dto/create-rental.dto';
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";




@ApiBearerAuth()
@ApiTags('rentals')
@UseGuards(JwtAuthGuard) //seguridad en las rutas XD
@Controller('rentals')
export class RentalController{
      constructor(private readonly rentalService:RentalService){
      }
    @ApiOperation({description:'Buscar Libros', summary:'Find Books'})
    @Get()
    async find(@Query() query:any ){
        const response = await this.rentalService.find();
        return response
    }

    @ApiOperation({description:'Buscar un Libro', summary:'Find One Book'})
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id:number){
        const response = await this.rentalService.findOne(id);

        return response;
    }

    @ApiOperation({description:'Agregar Libro', summary:'Add Book'})
    @Post()
    async create(@Body() payload: CreateRentalDTO){
        const response = await this.rentalService.create(payload);
        return response;
    }

    @ApiOperation({description:'Editar Libros', summary:'Update Books'})
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() payload:UpdateRentalDTO){
        const response = await this.rentalService.update(id, payload);
        return {id, body:payload}
    }

    @ApiOperation({description:'Buscar Libros', summary:'Delete Books'})
    @Delete(':id')
    async delete(@Param('id') id:number){
        const response = await this.rentalService.delete(id);

        return response;
    }
}