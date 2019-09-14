import React, { Component } from 'react';
import axios, {post} from 'axios';

class FileUploadComponent extends Component
{
constructor(props){
    super(props);
    this.state ={
        image: ''
    }
}
    onFormSubmit = (e) =>{
        e.preventDefault()
        this.fileUpload(this.state.image);
    }
    onChange = (e) => {
        let files = e.target.files || e.dataTransfer.files;
        if(!files.length)
            return;
        this.createImage(files[0]);
    }
    createImage = (file) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                image: e.target.result
            })
        };
        reader.reaadAsDataURL(file); 
    }
    fileUpload(image){
        const url = 'http://127.0.0.1:8000/api/contacts';
        const formData = {file: this.state.image}
        return  post(url, formData)
                .then(response => console.log(response))
    }
  render()
   {
    return(
        <form onSubmit={this.onFormSubmit}>
            <h1>File Upload</h1>
            <input type="file" onChange={this.onChange}/>
            <button type="submit">Upload</button>
        </form>
    )
   }
}

export default FileUploadComponent