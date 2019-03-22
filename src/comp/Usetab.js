import React from 'react'
import './Usetab.css';
import {  MDBRow,MDBCol } from 'mdbreact';
import FileViewer from 'react-file-viewer';
import 'react-confirm-alert/src/react-confirm-alert.css' 
import 'bootstrap/dist/css/bootstrap.css';
import Like from './Like'
import Comment from './Comment'


const Usetab = props => (
  
  
  <div className="row">

			{props.users.length > 0 ? (
				props.users.map(user => (
				
					<div className="col-md-4" key={user.id}>
							<img src={user.picture} className="card-img-top" alt="upload images" width="400px" height="300px"/>
							<div className="card">
								<div className="card-body">
									<h1 className="card-title">{user.name}</h1>
									<p className="card-text">{user.description.length>69?user.description.slice(0,23)+'<br/>'+user.description.slice(23,46)+'<br/>'+user.description.slice(46,66)+'...':user.description}</p>
									<div id="r">{user.username} Ar
									</div>
								</div>
								</div>
								<div className="card-footer">
									<div className="single-photo">
										<div >
										</div>
										<Like/>
										<Comment/>
									</div>
								</div>
					</div>
		
				))
			) : (
      "")}
      
	</div>
)

export default Usetab