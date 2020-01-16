import React, { Component } from 'react';

class Filter extends Component {
    state = {
        dimension: '',
    };
    
      handleChange = e => {
          console.log(e.target)
        this.setState({ [e.target.name]: e.target.value });
      };


    render() {

        return (
            <div>
                <h3>Filter By:</h3>
                
                <div className="twelve wide field">
                    <select onChange= {event => this.props.setFilterTerm(event.target.value)} value={this.state.dimension} name="dimension" className ="ui fluid dropdown">
                    <option value="">Select Dimension</option>
                    <option value="">No Filter</option>
                  <option value="300/200" >300 x 200</option>
                  <option value="100/100" >100 x 100</option>
                  <option value="250/250" >250 x 250</option>
                  <option value="400/200" >400 x 200</option>
                  <option value="300/300" >300 x 300</option>
                </select>
                </div>
            </div>    

        );
    }
}

export default Filter;