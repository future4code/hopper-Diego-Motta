import React from "react";
import axios from "axios";
import styled from "styled-components";
import props from 'prop-types';


class Player extends React.Component{

    state = {
        url: this.props.url
    }

    render(){
        return(
        <audio autoPlay="autoplay" controls="controls">
            <source src={this.state.url}></source>
        </audio>
        )
    }

}

export default Player