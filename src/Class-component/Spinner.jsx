import React from 'react'
import { Component } from 'react';
import Cstyle from "./Cstyle.css"

export default class Spinner extends Component {
    render() {
        return (
            <>
            <div class="text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                </div>
            </>
        )
    }
}
