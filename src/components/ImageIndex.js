import React, { Component } from 'react';
import {Pagination, Container, Divider, Grid, Dimmer, Loader} from 'semantic-ui-react'; 
import PostCard from '../components/PostCard.js';
import Filter from '../components/Filter';

class ImageIndex extends Component {

    state = {
        loading: true,
        imageIndex: [],
        activePage:1,
        dimension:''   
    }

    componentDidMount(){
        fetch(`http://localhost:3000/images`)
        .then(res => res.json())
        .then(this.initialState)
    }

    initialState = (resData) => {
        console.log(resData)
        this.setState({
            // loading finished so update state to false
            loading: false,
            imageIndex: resData,
            activePage: resData.page
        })
    }

    setFilterTerm = (term) => {
        console.log(term)
        this.setState({
          dimension: term
        })
    }

    filterPictures(){
        const pictureGrid = [...this.state.imageIndex.images];
        console.log(pictureGrid);
        function myFunction (image, index, arr){image.url.split('/').slice(5,7).join(' x ')};
        const imageDimension = pictureGrid.forEach(myFunction);
        console.log(imageDimension);
        let filteredList = [];
        // Filtering the spots according to type
        if(this.state.dimension === "") filteredList = pictureGrid;
        else {
          filteredList = pictureGrid.filter(picture => 
          picture === this.state.dimension)
        }

        return(
            filteredList.map(image => {
                   return( <Grid.Column>
                        <PostCard key={image.id} image={image}/>
                    </Grid.Column>)
            })
        )
    }
    

    handlePage = (e, { activePage }) => {
        let goToPage = { activePage }
        let pagenum = goToPage.activePage
        let pagestring = pagenum.toString()
        console.log(pagestring)
        this.setState({
        loading: true
        })
        const url = `http://localhost:3000/images/?page=` + pagestring

        fetch(url)
        .then(res => res.json())
        .then(this.initialState)
    }

    render(){
        console.log(this.state)

        if(this.state.loading){
            return(
                <Container>
                <Dimmer active inverted>
                  <Loader>Loading Images...</Loader>
                </Dimmer>
              </Container>
            )
        }

        return (
            <Container>
                <Divider hidden />
                <Container textAlign='center'>
                <h1>Photo Viewer App</h1>
                 <Filter setFilterTerm={this.setFilterTerm}/>
                 <Divider hidden />
                <Pagination  onPageChange={this.handlePage} size='mini' siblingRange="4" defaultActivePage={this.state.imageIndex.page} totalPages={this.state.imageIndex.pages} />
                </Container>
                    <Divider hidden />
                <Grid relaxed columns={5}>
                {/* { this.state.imageIndex.images.map(image => {
                    return (
                    <Grid.Column>
                        <PostCard key={image.id} image={image}/>
                    </Grid.Column>)
                }) } */}
                  {this.filterPictures()}
                </Grid>

            </Container>
        );
    }
}

export default ImageIndex;