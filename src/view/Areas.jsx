import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


import {
    Button,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";

  var  areasArrway = ["Edificio 1",
  "Edificio 2",
  "Edificio 3",
  "Jardin"]


class Areas extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            areas: areasArrway,
            edit:false,
            idArea:0,

        };
    }
    state = {};

    
    //cons data = {};
    titulo = "LISTA DE AREAS";


  frmNomArea = React.createRef();
  

  addArea = event => {
    event.preventDefault();
    
    var newArea = this.state;


    if(!this.state.edit) {
        newArea.areas.push(this.frmNomArea.value);
        newArea.areas.sort();    
    }
    else {
        newArea.areas[this.state.id] = this.frmNomArea.value;
        newArea.edit = false;
        newArea.id = 0;
    }
   

    this.setState({newArea}); 
  }

  viewArea = (id) => event => {
    event.preventDefault();

    this.frmNomArea.value = "";
    this.frmNomArea.focus();
    this.frmNomArea.value = this.state.areas[id];
  }

  editArea = (id) => event => {
    event.preventDefault();
    console.log("Editar Area");
    console.log(id);
    
    this.frmNomArea.focus();
    this.frmNomArea.value = this.state.areas[id];

    var newState = this.state;
    newState.edit = true;
    newState.id = id;

    this.setState(newState);

  }

  deleteArea = (id) => event => {
    event.preventDefault();
    console.log("Borrar area");
    console.log(id);

    this.frmNomArea.value = "";
    this.frmNomArea.focus();

    delete this.state.areas[id];

    var newArea = this.state.areas;
    this.setState({ area: newArea});
  }

    render() { 
        return ( 
            <div className="App-header2">
                <Link to="/">
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<HomeIcon />}
                    >
                    Regresar
                    </Button>
                </Link>
                <form autoComplete="off" onSubmit={this.addArea}>    
                    <TextField
                        label="Nombre"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmNomArea = e)}
                    />
                    <Fab
                    color="primary"
                    size="medium"
                    //className="dish-form-icon"
                    onClick={this.addArea}
                    >
                    <AddIcon />
                    </Fab>
                


                <List
                    component="nav"
                    subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                    >
                    {this.state.areas.map((area, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon onClick={this.viewArea(index)}>
                                <BusinessIcon />
                            </ListItemIcon>
                            <ListItemText inset primary={area} />
                            
                            <ListItemIcon onClick={this.editArea(index)}>
                                <EditIcon />
                            </ListItemIcon>
                            <ListItemIcon onClick={this.deleteArea(index)}>
                                <DeleteIcon />
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>
             </form>
            </div>
         );
    }
}
 
export default Areas;