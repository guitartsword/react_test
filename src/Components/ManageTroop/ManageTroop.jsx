import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
class ManageTroop extends Component{
    constructor(props){
        super(props);
        this.state = {
            barbarian:0,
            archer:0,
            goblin:0
        }
    }
    render(){
        return(
            <div>
                <h1>Administra tus Tropas</h1>
                <Button bsStyle="primary">Edit</Button>
                <h2>Nivel de las tropas</h2>
                <p>Barbaros: {this.state.barbarian}</p>
                <p>Arqueras: {this.state.archer}</p>
                <p>Duendes: {this.state.goblin}</p>
            </div>
        );
    }
}
export default ManageTroop;
