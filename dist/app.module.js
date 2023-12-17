"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const books_module_1 = require("./books/books.module");
const rentals_module_1 = require("./rentals/rentals.module");
const authors_module_1 = require("./authors/authors.module");
const categories_module_1 = require("./categories/categories.module");
const publishers_module_1 = require("./publishers/publishers.module");
const readers_module_1 = require("./readers/readers.module");
const typeorm_1 = require("@nestjs/typeorm");
const author_entity_1 = require("./authors/author.entity");
const book_entity_1 = require("./books/book.entity");
const category_entity_1 = require("./categories/category.entity");
const publisher_entity_1 = require("./publishers/publisher.entity");
const reader_entity_1 = require("./readers/reader.entity");
const rental_entity_1 = require("./rentals/rental.entity");
const user_module_1 = require("./users/user.module");
const user_entity_1 = require("./users/user.entity");
const auth_module_1 = require("./auth/auth.module");
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const dotenv = require("dotenv");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            books_module_1.BooksModule,
            rentals_module_1.RentalsModule,
            authors_module_1.AuthorsModule,
            categories_module_1.CategoriesModule,
            publishers_module_1.PublishersModule,
            readers_module_1.ReadersModule,
            user_module_1.UsersModule,
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '1234',
                database: 'library',
                entities: [
                    author_entity_1.AuthorEntity,
                    book_entity_1.BookEntity,
                    category_entity_1.CategoryEntity,
                    publisher_entity_1.PublisherEntity,
                    reader_entity_1.ReaderEntity,
                    rental_entity_1.RentalEntity,
                    user_entity_1.UserEntity,
                ],
                synchronize: true,
            }),
            mailer_1.MailerModule.forRootAsync({
                useFactory: () => ({
                    transport: {
                        host: 'smtp.sendgrid.net',
                        port: 587,
                        secure: false,
                        auth: {
                            user: 'apikey',
                            pass: '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',
                        },
                    },
                    defaults: {
                        from: 'srl.castillo@yavirac.edu.ec',
                    },
                    template: {
                        dir: process.cwd() + '/templates/',
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        options: {
                            strict: true,
                        },
                    },
                }),
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map