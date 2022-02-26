import ILeftPanelComponentProps from './leftPanel.component.props';
import React from 'react';
import {observer} from "mobx-react";
import "./styles/leftPanel.css"

@observer
class LeftPanelComponent extends React.Component<ILeftPanelComponentProps, any> {
    render() {
        return <div className="left-panel-container">
                <div>
                    <div><span className="filter-title">Start count (1 to 5)</span></div>
                    <select className="filter-select">
                        <option value="0">All stars</option>
                        <option value="1">Greater than 1 star</option>
                        <option value="2">Greater than 2 star</option>
                        <option value="3">Greater than 3 star</option>
                        <option value="4">Greater than 4 star</option>
                    </select>
                </div>
            </div>
    } 
}

export default LeftPanelComponent;