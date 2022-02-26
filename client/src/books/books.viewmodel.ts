import { observable, action, makeObservable } from "mobx";
import React, { ChangeEvent } from 'react';
import api from "../utils/api"
import Book from "./book.model";

class TransactionViewModel {
    @observable books?: Array<Book>;
    currentSearchValue: string = "";
    @observable currentFilter: string = "5";
    orignalBooks: Array<Book> = [];

    constructor() {
        makeObservable(this);
    }

    @action
    public search = async (e: ChangeEvent) => {
        const value: string = (<HTMLInputElement>e.target).value;
        this.currentSearchValue = value;
        this.books = await (await api.get(`/books/${value}/0`)).data;
        this.orignalBooks = this.books || [];
        
        if (Number(this.currentFilter) !== 0) {
            this.books = this.orignalBooks.filter(book => {
                if (Number(this.currentFilter) === 5)
                    return true;
    
                return book.averageRating > Number(this.currentFilter)
            })
        }
    }

    @action filter = (e: ChangeEvent) => {
        const value: string = (<HTMLInputElement>e.target).value;
        this.currentFilter = value;
        this.books = this.orignalBooks.filter(book => {
            if (Number(value) === 5)
                return true;

            return book.averageRating > Number(value)
        })
    }

    @action
    public paginationChange = async (e: ChangeEvent<unknown>, page: number) => {
        let offset = Math.ceil(page * 10);
        this.books = this.books?.slice(offset-10, offset);
        this.books = await (await api.get(`/books/${this.currentSearchValue}/${offset-5}`)).data;
        this.orignalBooks = this.books || [];

        if (Number(this.currentFilter) !== 0) {
            this.books = this.orignalBooks.filter(book => {
                if (Number(this.currentFilter) === 5)
                    return true;
    
                return book.averageRating > Number(this.currentFilter)
            })
        }
            
    };

    public getTotalItems(): number {
        return this.books && this.books.length ? this.books[0].totalItems : 0;
    }
}

export default TransactionViewModel;