import React, {Component} from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
class ManageTroop extends Component{
    constructor(props){
        super(props);
        this.state = {
            barbarian:0,
            archer:0,
            goblin:0,
            edit:false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleClick(event){
        
        switch(event.target.name){
            case 'edit':
                this.setState((prevState) => {
                    return {
                        edit: !prevState.edit
                    };
                });
                break;
            default:
                break;
        }
        
    }
    handleInputChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    render(){
        const levels = [1,2,3].map((value)=>{
            return (
                <option key={value} name="barbarian" value={value}>
                    Nivel {value}
                </option>
            )
        });
        const edit = (
            <div>
                <FormGroup>
                    <ControlLabel>Barabaros</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter level"
                        value={this.state.barbarian}
                        name='barbarian'
                        componentClass="select"
                        onChange={this.handleInputChange}>
                        {levels}
                    </FormControl>

                </FormGroup>
            </div>
        );
        const data = (
            <div>
                <h2>Nivel de las tropas</h2>
                <p onClick={this.handleClick} name='edit'>Barbaros: {this.state.barbarian}</p>
                <p onClick={this.handleClick} name='edit'>Arqueras: {this.state.archer}</p>
                <p onClick={this.handleClick} name='edit'>Duendes: {this.state.goblin}</p>
            </div>
        );
        const Data = () =>{
            if(this.state.edit)
                return edit;
            return data;
                
        }
        return(
            <div>
                <h1>Administra tus Tropas</h1>
                <Button bsStyle="primary" onClick={this.handleClick} name="edit">Edit</Button>
                <Data/>
            </div>
        );
    }
}
export default ManageTroop;
