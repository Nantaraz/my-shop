import React from 'react'
import './Usetab.css';
import {  MDBRow,MDBCol } from 'mdbreact';
import FileViewer from 'react-file-viewer';
import 'react-confirm-alert/src/react-confirm-alert.css' 
import 'bootstrap/dist/css/bootstrap.css';
import Like from './Like'


const Usetab = props => (
  
  
  <div className="row">

			{props.users.length > 0 ? (
				props.users.map(user => (
					<div className="col-md-4" key={user.id}>
							<img src={user.picture} className="card-img-top" alt="upload images" width="400px" height="300px"/>
							<div className="card">
								<div className="card-body">
									<h1 className="card-title">{user.name}</h1>
									<p className="card-text">{user.description}</p>
									<div>{user.username} Ar
									</div>
								</div>
								</div>
								<div className="card-footer">
									<div className="single-photo">
										<div >
										</div>
										<img href='./coeur.png'/>
										<Like/>
										{/* <button class="btn btn-primary" onClick={}>comment</button> */}
									</div>
								</div>
					</div>
		
					
				))
			) : (
      "")}
      
	</div>
)

export default Usetab