import IBookSearchComponentProps from './bookSearch.component.props';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import {observer} from "mobx-react";
import "./styles/bookSearch.css"

@observer
class BookSearchComponent extends React.Component<IBookSearchComponentProps, any> {
    render() {
        return <div className="search-container">
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input className="search-input" type="text" placeholder="Start searching..." />
                </div>
            </div>
    } 
}

export default BookSearchComponent;