import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


class PostCard extends Component {
   
  

    render() {
        const imageUrl = this.props.image.url;
        const imageWidth = imageUrl.split('/')[5]
        const imageHeight = imageUrl.split('/')[6]
        const expandlink = '/images/' + this.props.image.id + '/'

        return (
        <div>
            <Card color='blue'>
            <a href={expandlink}><Image src={this.props.image.url} height /></a>

                <Card.Content>
                <Card.Header><a href={expandlink}>{this.props.image.title}</a></Card.Header>
                <Card.Meta>
                {/* <span className='date'>Posted in {dateFormatter(this.props.image.image_date)}</span> */}
                </Card.Meta>
                <Card.Description> {imageWidth} by {imageHeight}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="lala">
                <Icon name='like' />
                {this.props.image.likes} Likes
                </a>
            </Card.Content>
            </Card>
        </div>
        );
    }
}

export default PostCard;