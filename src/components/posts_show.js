import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class PostShow extends Component {
    componentDidMount() {
     const { id } =  this.props.match.params;
     console.log('console this.props.match.params', this.props.match.params);
        this.props.fetchPost(id);
    }

    render() {
        const { post } = this.props;
        if(!post) {
            return <div>Loading....</div>;
        }

        return (
            <div>
                <Link className="btn btn-primary" to="/" >Back to Index</Link>
                
                <button
                className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}
                >
                Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categoires: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    console.log('console ownProps', ownProps);

    console.log('console posts[ownProps.match.params.id]', posts[ownProps.match.params.id]);
    return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost })(PostShow);