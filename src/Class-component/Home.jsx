import React from 'react'
import { ReactDOM } from 'react';
import { Component } from 'react';
import Cardnews from './Cardnews';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import Cstyle from './Cstyle.css'
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            art: [],
            page:1,
            totleSize:0
        }
    }

    async getArticals() {
        var url = await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&language=hi&pageSize=8&page=${this.state.page}&apiKey=37385d9c19f747cbb2af049e374aa649`);
        var data = await url.json();
        // console.log(data)
        this.setState({ art: data.articles });
        this.setState({ totleSize: data.totalResults});
    }

    componentDidMount() {
        this.getArticals()
    }

    componentDidUpdate(old) {

        if (old.category !== this.props.category)

            this.getArticals()
    }

    fetchMoreData=async()=>{
        this.setState({page:this.state.page+1})
        var url = await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&language=hi&pageSize=8&page=${this.state.page}&apiKey=37385d9c19f747cbb2af049e374aa649`);
        var data = await url.json();
        this.setState({art:this.state.art.concat(data.articles)})
    }

    render() {
        return (
            <>

                <InfiniteScroll
                    dataLength={this.state.art.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.art.length!==this.state.totleSize}
                    loader={<Spinner/>}
                >
                </InfiniteScroll>


                <h1 className="back m-1 p-3">Breaking News Headlines</h1>
                <div className="container-fluid">
                    <div className="row">
                        {
                            this.state.art.map((item, index) => {
                                return <Cardnews
                                    image={item.urlToImage}
                                    title={item.title}
                                    des={item.description}
                                    url={item.url}
                                />
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

