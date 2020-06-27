import React, { Component } from 'react';

import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from "@material-ui/core";



class Inicio extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App-content">
                <Container maxWidth="xs">
                <Link to="/areas">
                    <Button variant="contained" color="default">
                        Areas
                    </Button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="../ups">
                    <Button variant="contained" color="primary">
                        UPS
                    </Button>
                </Link>
                
            </Container>
            </div>
         );
    }
}
 
export default Inicio;

