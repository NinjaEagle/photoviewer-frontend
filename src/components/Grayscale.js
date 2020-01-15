import React, { Component } from 'react';

import isBoolean from 'lodash/isBoolean';
import isFunction from 'lodash/isFunction';

class Grayscale extends Component {
    // state = {
    //     enabled: false
    // }


    //  toggleSwitch = evt => {
    //     evt.preventDefault();

    //     if(this.state.enabled === false) {
    //       this.setState({ 
    //         enabled: !this.state.enabled,
    //         // grayArray: newArray
    //     })
    //     console.log("grayscale toggled on");
    //     } else{
    //         this.setState({ 
    //             enabled: !this.state.enabled,
    //         })
    //     }
    //         // console.log(newArray)
    //     this.props.grayScaleToggle(this.state)
    // }
    
    
    render() {
    
        return (
            <div>
                <div class="ui toggle checkbox" onClick={this.toggleSwitch}>
                    <input type="checkbox" name="public" />
                    <label>Toggle Grayscale</label>
                </div> 
            </div>
        );
    }
   
}

export default Grayscale;