import { Module } from '@nestjs/common';
import { PublisherEntity } from './publisher.entity';
import { PublisherController } from './publisher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublisherService } from './publisher.service';

@Module({
    imports: [TypeOrmModule.forFeature([PublisherEntity])],
    controllers:[PublisherController],
    providers:[PublisherService]
})

export class PublishersModule {}
