import React, { Component } from 'react';
import {Dropdown} from 'semantic-ui-react';

class Filter extends Component {
    state = {
        dimension: '',
    };
    
      handleChange = e => {
          console.log(e.target)
        this.setState({ [e.target.name]: e.target.value });
      };


    render() {
        console.log(this.state);

        const heightOptions = [
            {
                key: 'all',
                text:'All',
                value:'All'
            },
            {
                key: '1',
                text:'300 x 200',
                value:'300 x 200'
            },
            {
                key: '2',
                text:'100 x 100',
                value:'100 x 100'
            },
            {
                key: '3',
                text:'250 x 250',
                value:'250 x 250'
            },
            {
                key: '4',
                text:'400 x 200',
                value:'400 x 200'
            },
            {
                key: '5',
                text:'300 x 300',
                value:'300 x 300'
            },
        ]
        const linkstyle = {
            pointerevents: "all",
        }
        return (
            <div>
                <h3>Filter By:</h3>
                {/* <Dropdown onChange= {this.handleChange} value={this.state.dimension} name="name"
                placeholder='Select Dimension'
                fluid
                selection
                options={heightOptions}/> */}
                <div className="twelve wide field">
                    <select onChange= {event => this.props.setFilterTerm(event.target.value)} value={this.state.dimension} name="dimension" className ="ui fluid dropdown">
                    <option value="">Select Dimension</option>
                    <option value="">No Filter</option>
                  <option value="300 x 200" >300 x 200</option>
                  <option value="100 x 100" >100 x 100</option>
                  <option value="250 x 250" >250 x 250</option>
                  <option value="400 x 200" >400 x 200</option>
                  <option value="300 x 300" >300 x 300</option>
                </select>
                </div>
            </div>    
            // <div class="filter">
            //     Filter By Dimension: 
            //     <h1>Dimension</h1>
            //     <div role="listbox" aria-expanded="false" class="ui fluid selection dropdown" tabindex="0">
            //         <div class="default text" role="alert" aria-live="polite" aria-atomic="true">Select Dimension</div>
            //         <i aria-hidden="true" class="dropdown icon"></i>
            //         <div class="menu transition">
            //             <div
            //             style= {linkstyle}
            //             role="option"
            //             aria-checked="false"
            //             aria-selected="true"
            //             class="selected item"
            //             >
            //             <span class="text">300 x 200</span>
            //             </div>
            //             <div
            //             style={linkstyle}
            //             role="option"
            //             aria-checked="false"
            //             aria-selected="false"
            //             class="item"
            //             >
            //             <span class="text">100 x 100</span> 
            //             </div>
            //             <div
            //             style={linkstyle}
            //             role="option"
            //             aria-checked="false"
            //             aria-selected="false"
            //             class="item"
            //             >
            //             <span class="text">250 x 250</span>
            //             </div>
            //             <div
            //             style={linkstyle}
            //             role="option"
            //             aria-checked="false"
            //             aria-selected="false"
            //             class="item"
            //             >
            //             <span class="text">400 x 200</span> 
            //             </div>
            //             <div
            //             style={linkstyle}
            //             role="option"
            //             aria-checked="false"
            //             aria-selected="false"
            //             class="item"
            //             >
            //             <span class="text">300 x 300</span> 
            //             </div>
            //         </div>
            //     </div>
        );
    }
}

export default Filter;