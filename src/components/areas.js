import React, { Component } from "react";
import '../styles/header.css';
import Button from '@material-ui/core/Button';
import {Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AreasView from '../view/Areas';
import Header from './header';

import Footer from './footer';
import Inicio from '../view/Inicio';


class Areas extends Component{


    state = {  }

    render() { 
        return(
    <div>
        <Header name="AREAS" />
        <AreasView />
        <Footer />
    </div>
        );
    }
}
export default Areas;