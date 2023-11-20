import { Injectable, NotFoundException } from "@nestjs/common";
import { BookEntity } from "./book.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateBookDTO } from "./dto/update-book.dto";
import { BookDTO } from "./dto/book.dto";



@Injectable()
export class BookService{
    constructor(
        @InjectRepository(BookEntity)
        private bookRepository: Repository<BookEntity>,
    ){}
    async find(){
        const books= await this.bookRepository.find();
        return books
    }

    async findOne(id:number){
        const book= await this.bookRepository.findOne({where:{id:id}});
        if(!book){
            throw new NotFoundException({message:'Libro no encontrado', error:'No se ha encontrado'});
        }
        return book
    }

    create(payload:BookDTO){
        const newBook= this.bookRepository.create();
        newBook.id = payload.id;
        newBook.title = payload.title;
        newBook.publicationDate = payload.publicationDate;
        newBook.author = payload.author;
        newBook.category = payload.category; 
        newBook.publisher = payload.publisher;
        newBook.language = payload.language;
        newBook.pages = payload.pages;
        newBook.description = payload.description;

        const response = this.bookRepository.save(newBook);

        return response
    }


    async update(id: number, payload: UpdateBookDTO){
        const Book= await this.findOne(id);
        Book.title = payload.title;
        Book.publicationDate = payload.publicationDate;
        Book.author = payload.author;
        Book.category = payload.category; 
        Book.publisher = payload.publisher;
        Book.language = payload.language;
        Book.pages = payload.pages;
        Book.description = payload.description;
        if(!Book){
            throw new NotFoundException({message:'Libro no encontrado', error:'No encontrado'});
        }
        const response = await this.bookRepository.update(id, Book);
        return response 
    }



    async delete(id: number){
        //const Book= await this.findOne(id)
        const Book= await this.findOne(id);
    if(!Book){
        throw new NotFoundException({message:'Libro no encontrado', error:'No encontrado'});
    }
        const response = await this.bookRepository.delete(id);
        
        return response
    }
}