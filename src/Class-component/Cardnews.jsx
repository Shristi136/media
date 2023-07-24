import React from 'react'
import { Component } from 'react'
import { ReactDOM } from 'react'
import nopic from "./noimage.png"
export default class Cardnews extends Component{
render(){
    return(
        <>
        <div className="col-xxl-1 col-xl-3 col-lg-2 col-md-3 col-sm-4 col-xs-8">
        <div className="card">
  <img src={this.props.image?this.props.image:nopic} className="card-img-top" style={{height:"200px"}} alt="this is an image"/>
  <div className="card-body">
    <h5 className="card-title"style={{height:"100px"}}>{this.props.title.slice(0,80)+"..."}</h5>
    <p className="card-text" style={{height:"150px"}}>{this.props.des}</p>
    <a href={this.props.url} className="btn btn-primary w-100 p-1">Read more...</a>
  </div>
</div>
        </div>
        </>
    )
}
}
