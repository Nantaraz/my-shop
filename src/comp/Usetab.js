import React from 'react'
import './Usetab.css';

import 'react-confirm-alert/src/react-confirm-alert.css' 
import 'bootstrap/dist/css/bootstrap.css';
import Like from './Like'
import Comment from './Comment'


const Usetab = props => (
  
  
  <div className="row y">

			{props.users.length > 0 ? (
				props.users.map(user => (
				
					<div className="col-md-4 f" key={user.id}>
							<img src={user.picture} className="card-img-top e" alt="upload images" width="400px" height="300px"/>
							<div className="card">
								<div className="card-body p">
									<h1 className="card-title">{user.name}</h1>
									<p className="card-text">{user.description.length>120?user.description.slice(0,117)+'...':user.description}</p>
									<div id="r">{user.username} Ar
									</div>
								</div>
								</div>
								<div className="card-footer">
									<div className="single-photo">
										<div className="row q">
										
										<div className="col-md-6"><Like/></div>
										<div className="col-md-6"><Comment/></div>
										</div>
									</div>
								</div>
					</div>
		
				))
			) : (
      "")}
      
	</div>
)

export default Usetab