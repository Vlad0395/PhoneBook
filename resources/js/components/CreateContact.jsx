import React, {Component} from 'react'

class CreateContact extends Component{
    render(){
        return(
           <form className="form-group card">
               <div className="row center">
                   <div className="col-md-2">
                        <i class="fas fa-times"></i>
                   </div>
                   <div className="col-md-6">
                        <p>Save Contact</p>
                   </div>
                   <div className="col-md-2">
                        <i class="fas fa-check"></i>
                   </div>
               </div>
               <label htmlFor="FirstName">
                   <input className="form-control" type="text" name='FirstName' placeholder="First name"/>
               </label>
               <label htmlFor="LastName">
                   <input className="form-control" type="text" name='LastName' placeholder="Last name"/>
               </label>
               <label htmlFor="Mobile">
                   <input className="form-control" type="tel" name='Mobile' placeholder="Phone" maxLength='12'/>
               </label>
               <label htmlFor="submitForm">
                   <input type="submit" className="btn btn-primary" name="submitForm" value="send"/>
               </label>
           </form>
        );
    }
}

export default CreateContact