import React, { useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import AffCom from './AffCom'


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

            <button
            onClick={()=>{
                confirmAlert({
                    customUI: ({ onClose }) => {
                      return (
                        <div className='custom-ui'>
                          <button onClick={onClose}>X</button>
                          <form id='ID'
                            onSubmit={
                              (b)=>{
                                b.preventDefault()
                                var test=document.forms['ID'].elements['input'].value
                               //  setCom(coms.concat([test]))
                               addCom(coms,test)
                                document.getElementById('blabla').innerHTML+=test+'<br/>'
                                document.getElementById('coment').value=''
                                setCot(cot+1)
                              }
                            }
                          >
                              

                              <input name='input' type="text" id='coment' placeholder={coms.commentaire}/>

                              <button >comment</button>
                              
                          </form>
                          <div id='blabla'></div>
                          <AffCom coms={coms}/>
                        </div>
                      );
                    }
                  });
            }}
            > 
            comment {cot}</button>     
    )   
        
}



    export default Comment