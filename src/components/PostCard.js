import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


class PostCard extends Component {

    render() {
        const imageUrl = this.props.image.url;
        const imageWidth = imageUrl.split('/')[5]
        const imageHeight = imageUrl.split('/')[6]
        const expandlink = '/images/' + this.props.image.id + '/'
        const grayScaleImg = imageUrl.concat("?grayscale");


        // for the future, I want to implement the like photo feature
        return (
        <div>
            <Card color='blue'>
            {this.props.grayScaleToggle? <a href={expandlink}><Image src={grayScaleImg} height /></a>
                 : 
            <a href={expandlink}><Image src={imageUrl} height /></a>}

                <Card.Content>
                
                <Card.Header><a href={expandlink}>{this.props.image.title}</a></Card.Header>
                <Card.Meta>
                </Card.Meta>
                <Card.Description> Image {this.props.image.id} <br></br>
                {imageWidth} by {imageHeight}</Card.Description>
                </Card.Content>
                <Card.Content extra>

                <a href="Image">
                <Icon name='like' />
            
                </a>
            </Card.Content>
            </Card>
        </div>
        );
    }
}

export default PostCard;