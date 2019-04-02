import React, { Component } from "react";

import ImageUpload from "../components/ImageUpload";
import Footer from "../components/Footer";

import '../css/addUser.css';

class AddUser extends Component {
  constructor(props) {
   super(props);
   this.state = {			
	  };
    this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleInputChange = this.handleInputChange.bind(this);
  }

 handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
	}
	
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
	handleUploadImage(event) {
		console.log("\n Main");
	}
  render() {
    return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div id = "main-panel1" class="main-panel1">
						<div class="content">
								<div class="container-fluid">
									<div class="row">
										<div class="col-md-8">
											<div class="card">
												<div class="header">
													<h4 class="title">Add User</h4>
												</div>
												<div class="content">
												<form>
													<div class="row">
														<div class="col-md-6">
															<div class="form-group">
																<label class="control-label">First Name</label>
																	<input type="text" name="firstName" placeholder="First Name" class="form-control" value={this.state.firstName} onChange={this.handleInputChange}/>
															</div>
															</div>
														<div class="col-md-6">
															<div class="form-group">
																<label class="control-label">Last Name</label>
																	<input type="text" name="lastName" placeholder="Last Name" class="form-control"  value={this.state.lastName} onChange={this.handleInputChange}/>
																</div>
														</div>
													</div>
													<div class="row">
													<div class="col-md-5">
															<div class="form-group">
																<label class="control-label">Flat Number</label>
																	<input type="number" name="flatNum" placeholder="Flat Number" class="form-control" value={this.state.flatNum} onChange={this.handleInputChange}/>
															</div>
														</div>
														<div class="col-md-3">
															<div class="form-group">
																<label class="control-label">Age</label>
																	<input type="number" name="age" placeholder="Age" class="form-control" value={this.state.age} onChange={this.handleInputChange}/>
															</div>
														</div>
														<div class="col-md-4">
															<div class="form-group">
																<label class="control-label">Gender</label>
																<select name = "gender" class="form-control" value={this.state.gender} onChange={this.handleInputChange}>
																	<option value = "1">Female</option>
																	<option value = "2">Male</option>
																	<option value = "3">Others</option>
																</select>
																</div>
														</div>
													</div>
													<div class="row">
														<div class="col-md-12">
															<div class="form-group">
																<label class="control-label">Email Address</label>
																	<input type="text" name="email" placeholder="Email Address" class="form-control" value={this.state.email} onChange={this.handleInputChange}/>
															</div>
															</div>
													</div>
													<div class="row">
														<div class="col-md-6">
															<div class="form-group">
																<label class="control-label">Mobile Number</label>
																	<input type="text" name="mobileNumber" placeholder="Mobile Number" class="form-control" value={this.state.mobileNumber} onChange={this.handleInputChange}/>
															</div>
															</div>
														<div class="col-md-6">
															<div class="form-group">
																<label class="control-label">Alternate Number</label>
																	<input type="text" name="altNumber" placeholder="Alternate Number" class="form-control"  value={this.state.altNumber} onChange={this.handleInputChange}/>
																</div>
														</div>
													</div>
													<div class="row">
														<div class="btn-head">
														<button type="submit" value="Submit" class="pull-right btn btn-info">Add User</button>
														</div>
													</div>
												</form>
													</div>
												
											</div>
										</div>
										<div class="col-md-4">
											<div class="card card-user">
												<div class="content"><ImageUpload/></div>
											</div> 
										</div>
									</div>
								</div>
						</div>
					</div>
				</form>
				<Footer/>
		  </div>
    );
  }
}

export default AddUser;