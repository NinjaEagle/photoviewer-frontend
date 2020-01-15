import React, { Component } from 'react';
import {Pagination, Container, Divider, Grid, Dimmer, Loader} from 'semantic-ui-react'; 
import PostCard from '../components/PostCard.js';
import Filter from '../components/Filter';
import GrayScale from '../components/Grayscale';

class ImageIndex extends Component {

    state = {
        loading: true,
        imageIndex: [],
        allImgs: [],
        activePage:1,
        dimension:'',
        grayScaleToggle: false   
    }

    componentDidMount(){
        fetch(`http://localhost:3000/images`)
        .then(res => res.json())
        .then(this.initialState) 
        fetch(`http://localhost:3000/get_All_Pictures`)
        .then(res => res.json())
        .then(data => this.setState({allImgs: data}))
    }

    // componentDidMount(){
    //     fetch(`http://localhost:3000/get_All_Pictures`)
    //     .then(res => res.json())
    //     .then(data => this.setState({allImgs: data}))
    // }
    // filter throught images 
    // allImgs.filter(()=>{this.state.dimension ===  })

    initialState = (resData) => {
        console.log(resData)
        this.setState({
            // loading finished so update state to false
            loading: false,
            imageIndex: resData,
            activePage: resData.page
        })
    
        // sessionStorage.setItem('pictures', JSON.stringify(resData))
        // let obj = JSON.parse(sessionStorage.pictures);
        // console.log(obj);
    }

    setFilterTerm = (term) => {
        this.setState({
          dimension: term
        })
    }


    toggleSwitch = evt => {
        evt.preventDefault();
            this.setState({ 
                grayScaleToggle: !this.state.grayScaleToggle,
            })
    }

    // 1. render only pagenation or filtered array
    // 2. figure out how to filter dimentions 

    // display10PerPage(){
    //     const {imageIndex} = this.state;

    //     return( 
    //      <Grid.Column>
    //         <PostCard grayScaleToggle={this.state.grayScaleToggle} key={image.id} image={image}/>
    //      </Grid.Column>
    //     )
    // }
    filterPictures(){
        const pictureGrid = [...this.state.allImgs.images];
        console.log(pictureGrid);
        let newFilteredList = [];
        // pictureGrid.map(image => { newFilteredList.push(images.url.split('/').slice(5,7).join('/'))});
        // Filtering the spots by matching up the dimension with the dimension selected
        if(this.state.dimension === "") newFilteredList = [...this.state.imageIndex.images];
        else {
            newFilteredList = pictureGrid.filter(picture => picture.url.includes(this.state.dimension))
        }
        return(
            newFilteredList.map(image => {
                return( <Grid.Column>
                    <PostCard grayScaleToggle={this.state.grayScaleToggle} key={image.id} image={image}/>
                </Grid.Column>)
            })
        )
    }
    
// handles the active page and toggles through the pages
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

        // show while pictures are not loaded
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
                 <div class="ui toggle checkbox" onClick={this.toggleSwitch}>
                    <input type="checkbox" name="public" />
                    <label>Toggle Grayscale</label>
                </div> 
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