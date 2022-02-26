import { observable, makeObservable } from 'mobx';
import {
    serialize,
    deserialize,
    serializable,
    createModelSchema,
    primitive
} from "serializr"

class Book {
    @serializable
    @observable title: string = '';
    @serializable
    @observable authors: string[] = [];
    @serializable
    @observable publisher: string = '';
    @serializable
    @observable publishedDate: string = '';
    @serializable
    @observable description: string = '';
    @serializable
    @observable thumbnail: string = '';
    @serializable
    @observable categories: string[] = [];
    @serializable
    @observable pageCount: string = '';
    @serializable
    @observable averageRating: number = -1;

    constructor(title: string, authors: string[], publisher: string, publishedDate: string, description: string, thumbnail: string, categories: string[], pageCount: string, averageRating: number) {
        makeObservable(this);
        this.title = title;
        this.authors = authors;
        this.publisher = publisher;
        this.publishedDate = publishedDate;
        this.description = description;
        this.thumbnail = thumbnail;
        this.categories = categories;
        this.pageCount = pageCount;
        this.averageRating = averageRating;

        createModelSchema(Book, {
            title: primitive(),
            authors: primitive(),
            publisher: primitive(),
            publishedDate: primitive(),
            description: primitive(),
            thumbnail: primitive(),
            categories: primitive(),
            pageCount: primitive(),
            averageRating: primitive()
        })
    }

    public serialize = () => {
        return serialize(this.toJson());
    }

    public deserialize = () => {
        return deserialize(Book, this.toJson());
    }

    private toJson = () => {
        return {
            "title": this.title,
            "authors": this.authors,
            "publisher": this.publisher,
            "publishedDate": this.publishedDate,
            "description": this.description,
            "thumbnail": this.thumbnail,
            "categories": this.categories,
            "pageCount": this.pageCount,
            "averageRating": this.averageRating
        }
    }
}

export default Book;