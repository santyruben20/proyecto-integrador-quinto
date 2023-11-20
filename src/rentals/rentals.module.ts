import { Module } from '@nestjs/common';
import { RentalEntity } from './rental.entity';
import { RentalController } from './rental.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentalService } from './rental.service';

@Module({
    imports:[TypeOrmModule.forFeature([RentalEntity])],
    controllers: [RentalController],
    providers:[RentalService]
})
export class RentalsModule {}
