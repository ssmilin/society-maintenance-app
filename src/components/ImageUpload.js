import React, { Component } from "react";
import "../css/imageUpload.css";
import sudar from "../img/sudar.jpg";
export default class ImageUpload extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          imageURL: 'http://localhost:8000/public/Test.jpg',
        };
    }
        onChangeFile(event) {
            event.stopPropagation();
            event.preventDefault();
            var file = event.target.files[0];
            const data = new FormData();
            data.append('file', file);
            data.append('filename', file.name);
            fetch('http://localhost:8000/upload', {
            method: 'POST',
            body: data,
            }).then((response) => {
            response.json().then((body) => {
                this.setState({ imageURL: `http://localhost:8000/${body.file}` });
            });
            });
        }
    render() {
        return (
            <div>
                <div class="avatar-upload">
                    <div class="avatars">
                        <img class = "avatars" src={sudar} alt="img" />
                    </div>
                    <input id="file-upload" type="file" ref={(ref) => this.upload = ref} style={{display: 'none'}} onChange={this.onChangeFile.bind(this)}/>
                    <button class="pull-right btn btn-info" onClick={()=>{this.upload.click()}}> Upload Photo</button>      
                </div>
            </div>
        )}
}