import { Component } from "react";
import { render } from "react-dom";
import BooksViewModel from '../books/books.viewmodel';

describe("Books view model", () => {
    it("should render book item", () => {
        const component = render(<BooksViewModel />);
        expect(component).toBeInTheDocument();
    })

})

export {}