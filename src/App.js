import React, {Component} from "react"
import './App.css'
/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
          firstName:"",
          lastName:"",
          age:"",
          gender:"",
          favDestination:"London",
          isVeg:false,
          isNonVeg:false,
          isVegan:false
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
      const {name,value,type,checked}=event.target
      type === "checkbox" ? this.setState({[name]:checked}) :this.setState({[name]:value})
      
     
    }
    render() {
        return (
            <main>
                <form className="App-header">
                  <h2>Please fill the Holiday Form:</h2>
                    <input type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange} /><br />
                    <input type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange} /><br />
                    <input placeholder="Age"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange} /><br />
                    
                   <label>
                     <input type="radio"
                     name="gender"
                     value="male"
                     checked={this.state.gender === "male"}
                     onChange={this.handleChange}
                     /> Male
                   </label>
                    <br />
                    <label>
                     <input type="radio"
                     name="gender"
                     value="female"
                     checked={this.state.gender === "female"}
                     onChange={this.handleChange}
                     /> Female
                   </label>
                   <br />
                    
                    <label>Fav Destination </label>
                    <select 
                    value={this.state.favDestination}
                    onChange={this.handleChange}
                    name="favDestination"
                >
                    <option value="London">London</option>
                    <option value="Paris">Paris</option>
                    <option value="Roam">Roam</option>
                    <option value="Itly">Itly</option>
                    <option value="Boston">Boston</option>
                    </select>
                    <br />
                    
                   
                    <label for="diet"> <input 
                    type="checkbox" 
                    name="isVeg" 
                    onChange={this.handleChange} 
                    checked={this.state.isVeg}/> 
                    Vegiterian</label>
                    <br />

                    <label for="diet"> <input 
                    type="checkbox" 
                    name="isNonVeg" 
                    onChange={this.handleChange} c
                    hecked={this.state.isNonVeg} /> 
                    Non-Vegiterian </label>
                    <br />

                    <label for="diet"> <input 
                    type="checkbox" 
                    name="isVegan" 
                    onChange={this.handleChange} 
                    checked={this.state.isVegan} /> 
                    Vegan </label>
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2 className="Header2">Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.favDestination}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.isVeg ? "Vegetarian," : ""}
                    {this.state.isNonVeg ? "Non-Vegetarian," : ""}
                    {this.state.isVegan ? "Vegan" : ""}
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default App
