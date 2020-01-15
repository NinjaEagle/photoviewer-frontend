import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


class PostCard extends Component {

    // state = {
    //     grayScaleToggle: false,
    // }

    // toggleGrayScale= props => {
    //     const newArray = []
    //     const {imageData} = this.props;
    //     console.log(imageData)
    //     imageData.images.map( image => {
    //         newArray.push(image.url.concat("?grayscale"))
    //     });
    // }

    render() {
        const imageUrl = this.props.image.url;
        const imageWidth = imageUrl.split('/')[5]
        const imageHeight = imageUrl.split('/')[6]
        const expandlink = '/images/' + this.props.image.id + '/'
        const grayScaleImg = imageUrl.concat("?grayscale");

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