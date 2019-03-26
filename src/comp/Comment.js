import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import AffCom from './AffCom';
import "./Comment.css";


const Comment= props => {
    const initialFormState = []
    const [ coms, setCom ] = useState(initialFormState)
    const [ cot, setCot ] = useState(0)
    const addCom = (coms,test) => {
      setCom(coms.concat([test]))

    }
    const handleInputChange = event => {
      const { name, value } = event.target

      setCom({ ...coms, [name]: value })
  	}

   
    return(

            <p className="b"
            onClick={()=>{
                confirmAlert({
                    customUI: ({ onClose }) => {
                      return (
                        <div className='custom-ui'>
                          <button className="btn btn-danger jk"onClick={onClose}>X</button>
                          <form id='ID'
                            onSubmit={
                              (b)=>{
                                b.preventDefault()
                                var test=document.forms['ID'].elements['input'].value
                               //  setCom(coms.concat([test]))
                               addCom(coms,test)
                                document.getElementById('blabla').innerHTML+=test+'<br/><hr/>'
                                document.getElementById('coment').value=''
                                setCot(cot+1)
                              }
                            }
                          >
                              

                              <input name='input' type="text" id='coment' placeholder={coms.commentaire}/>

                              <button className='btn btn-primary'>comment</button>
                              
                          </form>
                          <div id='blabla'></div>
                          <AffCom coms={coms}/>
                        </div>
                      );
                    }
                  });
            }}
            > 
            comment {cot}</p>     
    )   
        
}



    export default Comment