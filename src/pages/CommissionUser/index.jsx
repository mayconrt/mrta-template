import React, { useEffect, useState } from 'react'
import api from '../../service/user'

import ButtonSearch from '../../Components/Buttons/Button'
import InputText from '../../Components/Fields/InputText'
import Container from '../../Components/Containers'


import './style.css'

function Repasse(props) {
    const [ecommerceId, setEcommerceId] = useState('')
    const [userName, setUserName] = useState('')

    const changeEcommerceId = (event) => {
         setEcommerceId(event.target.value) 
      };    

      const changeUserName = (event) => {
        setUserName(event.target.value) 
     };          

     async function addSeller(){
        try{

            const response = await api.put(`sellers/${ecommerceId}/${userName}`)
            if(response.status == 200){
                alert('seller inserido com sucesso')
            }else{
                alert('erro')    
            }
        }catch(error){
            console.log('error')
        }
    }

    return (
        <Container title='Create Seller'>
            <div className="ma-user">
                <div className='ma-content-filter'>
                    <InputText name='ecommerceId' placeholder='Ecommerce Id' onChange={changeEcommerceId} />
                    <InputText name= 'userName' placeholder='User Name (e-mail)' onChange={changeUserName}/>
                    <ButtonSearch text='Add' onClick={addSeller} />
                </div>
            </div>
        </Container>

    )
}

export default Repasse