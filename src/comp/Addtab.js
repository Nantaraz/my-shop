import React, { useState } from 'react'
import "./Addtab.css"
import File from './File'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImageUploader from 'react-images-upload';

const Addtab = props => {
	const initialFormState = { id: null, name: '', username: '' ,picture: '',description: ''}
	const [ user, setUser ] = useState(initialFormState)

	

	const onDrop=(pictures)=>{
		
		setUser({ ...user, picture:pictures })
		console.log(pictures);
		
	}
	
	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return
				if (!isNaN((user.username))) 
				props.addUser(user)
				props.setCount(props.count+1)
				
				setUser(initialFormState)
				
				
			}}
		>
		
			<label> Produit</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} /><br/>
			<label class="s">Prix</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} /><br/>

			
			
			<button class="btn btn-primary mian" onClick={()=>{isNaN(user.username)? document.getElementById("mi").innerHTML="Entrer un nombre":document.getElementById("mi").innerHTML="" }}
			>Ajouter</button><br/>
			<label> Déscription</label>
			<input type="text" name="description" value={user.description} onChange={handleInputChange} />	
				{/* <File />
			*/}
			<ImageUploader
                withIcon={false}
                buttonText='File'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
					label=''
					accept='image/'
				
            />
			

	
		<div id="mi" class="nan">
		</div>

		

				

		</form>

		
	)

	
}




// class Addtab extends React.Component {

// 	constructor(props) {

// 	}

// 	initialFormState = { id: null, name: '', username: '' ,picture: '',description: ''}
	
// 	[ user, setUser ] = useState(initialFormState)

   

// 	onDrop=(pictures)=>{
// 	   // let pic= URL.createObjectURL(pictures)
// 	   setUser({ ...user, picture:pictures })
// 	   console.log(pictures);
	   
//    }
   
// 	handleInputChange = event => {
// 	   const { name, value } = event.target

// 	   setUser({ ...user, [name]: value })
//    }

//    render(){
// 	   return(
// 		   <form
// 		   onSubmit={event => {
// 			   event.preventDefault()
// 			   if (!user.name || !user.username) return
// 			   if (!isNaN((user.username))) 
// 			   this.props.addUser(user)
// 			   this.props.setCount(props.count+1)
// 			   setUser(initialFormState)
			   
			   
// 		   }}
// 	   >
	   
// 		   <label> Produit</label>
// 		   <input type="text" name="name" value={this.user.name} onChange={this.handleInputChange} /><br/>
// 		   <label class="s">Prix</label>
// 		   <input type="text" name="username" value={this.user.username} onChange={this.handleInputChange} /><br/>

		   
		   
// 		   <button class="btn btn-primary mian" onClick={()=>{isNaN(this.user.username)? document.getElementById("mi").innerHTML="Entrer un nombre":document.getElementById("mi").innerHTML="" }}
// 		   >Ajouter</button><br/>
// 		   <label> Déscription</label>
// 		   <input type="text" name="description" value={this.user.description} onChange={this.handleInputChange} />	
// 			   {/* <File />
// 		   */}
// 		   <ImageUploader
// 			   withIcon={false}
// 			   buttonText='File'
// 			   onChange={this.onDrop}
// 			   imgExtension={['.jpg', '.gif', '.png', '.gif']}
// 			   maxFileSize={5242880}
// 			   label=''
// 			   accept='image/'
			   
// 		   />
		   

   
// 	   <div id="mi" class="nan">
// 	   </div>

	   

			   

// 	   </form>
// 	   )
//    }
// }
 export default Addtab