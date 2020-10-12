import React from "react";
import {NavLink} from "react-router-dom";


const BlogItem = (props)=>{
    return (
        <div className="col-md-4 col-sm-6">
            <div className="single-blog mb-60">
                <div className="blog-img">
                    <a href="#"><img src={"sys/img/blog/"+props.img} alt=""/></a>
                </div>
                <div className="post-info">
								<span className="post-author">
									<i className="fa fa-user" aria-hidden="true"></i>
									<a href="#">{props.author}</a>
								</span>
                    <span className="post-author">
									<i className="fa fa-calendar"></i>{props.date}
								</span>

                </div>
                <div className="post-content">
                    <h2 className="semi-title">{props.title}</h2>
                    <p className="description">{props.description}</p>
                    <NavLink to="/blog">read more</NavLink>
                </div>
            </div>
        </div>
    )
}
class Blog  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {blogItems: []};
    }

    componentDidMount() {
        this.props.getArticles().then(
            articles=>{
                let articlesCount = articles.length;
                let blogItems = [];
                for (let i = 0; i < articlesCount; i++) {
                    blogItems.push(<BlogItem
                        key={i}
                        title={articles[i].title}
                        author={articles[i].author}
                        date={articles[i].date}
                        description={articles[i].description}
                        img={articles[i].img}
                    />)
                }
                this.setState({blogItems: blogItems})
            }
        )
    }

    render () {
        return (
            <div className="blog-area pt-100 pb-40">
                <div className="container ">
                    <div className="row">

                        {this.state.blogItems}

                    </div>
                </div>
            </div>
        );
    }
}
export default Blog;