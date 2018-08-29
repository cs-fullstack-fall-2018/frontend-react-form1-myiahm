import React, {Component} from 'react'

class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personName: "",
            personAge: "",
            personMood: "",

    }
    }

    personNameChange = (event) => {
        this.setState({personName: event.target.value});

    }
    personAgeChange = (event) => {
        this.setState({personAge: event.target.value});

    }
    personMoodChange = (event) => {
        this.setState({personMood: event.target.value});

    }
    submitFunction = (event) => {
        console.log("Submitted Form.");
        this.setState({input:( "Hello " + this.state.personName + "." + " Your age is: " + this.state.personAge + ", and you are feeling " + this.state.personMood)})

        event.preventDefault();

    }




render()
{
    return (
        <div>
            <form onSubmit={this.submitFunction}>
                <h1>Game</h1>
                <label htmlFor="personName">Personal Info: </label>
                <input type="text" id="personName" placeholder="EnterName" value={this.state.personName}
                       onChange={this.personNameChange}/>
                <input type="text" id="personAge" placeholder="EnterAge" value={this.state.personAge}
                       onChange={this.personAgeChange}/>
                <input type="text" id="personMood" placeholder="EnterMood" value={this.state.personMood}
                       onChange={this.personMoodChange}/>
                <button>Submit</button>
                <p>{this.state.input}</p>



            </form>
        </div>
    );
}}


export default PersonStats;