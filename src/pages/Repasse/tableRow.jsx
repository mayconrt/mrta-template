import React, { useEffect, useState } from 'react'
import api from '../../service/repasse'

import ButtonSend from '../../Components/Buttons/Button'

function TableRow(row) {
    const [id, setId] = useState(row.item.id);
    const [amount, setAmount] = useState(row.item.valor);
    const [status, setStatus] = useState('Pending');

    // useEffect(() => {
    //     console.log('linha',row)
        
    // });

    async function sendRepasse(){
        try{
            const response = await api.get(`${id}/${amount}`)
            console.log('response: ', response)
            if(response.status == 200){
                setStatus('Done')
                row.setLog(
                    `SUCCESS - ecommerce_id: ${id} amount: ${response.data.amount} ` +
                    `transaction_id: ${response.data.id} status: ${response.data.status} ` +
                    `created_at: ${response.data.createdAt} holderName: ${response.data.bankAccount.holderName}`
                )
            }else{
                console.log('1')
                setStatus('Error')
                row.setLog(
                    `ERROR - ecommerce_id: ${id} amount: ${amount} msg: ${response.data.message}` 
                )
            }
        }catch(error){
            console.log(error.response)
            setStatus('Error')
            row.setLog(
                `ERROR - ecommerce_id: ${id} amount: ${amount} msg: ${error.response.data.message}` 
            )
        }
    }

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{amount}</td>
            <td>{status}</td>
            <td><ButtonSend onClick={e=> sendRepasse()} text='send'/> </td>
        </tr>
    );
}


export default TableRow