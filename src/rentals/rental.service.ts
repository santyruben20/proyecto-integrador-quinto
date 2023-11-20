import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RentalEntity } from "./rental.entity";
import { RentalDTO } from "./dto/rental.dto";
import { UpdateRentalDTO } from "./dto/update-rental.dto";



@Injectable()
export class RentalService{
    constructor(
        @InjectRepository(RentalEntity)
        private rentalRepository: Repository<RentalEntity>,
    ){}
    async find(){
        const rentals= await this.rentalRepository.find();
        return rentals
    }

    async findOne(id:number){
        const rental= await this.rentalRepository.findOne({where:{id:id}});
        if(!rental){
            throw new NotFoundException({message:'Alquiler no encontrado', error:'No se ha encontrado'});
        }
        return rental
    }

    create(payload:RentalDTO){
        const newRental= this.rentalRepository.create();
        newRental.reader = payload.reader;
        newRental.book = payload.book;
        newRental.departureDate = payload.departureDate;
        newRental.entryDate = payload.entryDate;

        const response = this.rentalRepository.save(newRental);

        return response
    }
 

    async update(id: number, payload: UpdateRentalDTO){
        const Rental= await this.findOne(id);
        Rental.reader = payload.reader;
        Rental.book = payload.book;
        Rental.departureDate = payload.departureDate;
        Rental.entryDate = payload.entryDate;
        if(!Rental){
            throw new NotFoundException({message:'Alquiler no encontrado', error:'No encontrado'});
        }
        const response = await this.rentalRepository.update(id, Rental);
        return response 
    }



    async delete(id: number){
        //const Book= await this.findOne(id)
        const Rental= await this.findOne(id);
    if(!Rental){
        throw new NotFoundException({message:'Alquiler no encontrado', error:'No encontrado'});
    }
        const response = await this.rentalRepository.delete(id);
        
        return response
    }
}