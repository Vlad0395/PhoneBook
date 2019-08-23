import React, {Component} from 'react'

class CreateContact extends Component{
    render(){
        return(
           <form className="form-group card">
               <label htmlFor="FirstName">
                   <input className="form-control" type="text" name='FirstName' placeholder="First name"/>
               </label>
               <label htmlFor="LastName">
                   <input className="form-control" type="text" name='LastName' placeholder="Last name"/>
               </label>
               <label htmlFor="Mobile">
                   <input className="form-control" type="tel" name='Mobile' placeholder="Phone" maxLength='12'/>
               </label>
           </form>
        );
    }
}

export default CreateContact