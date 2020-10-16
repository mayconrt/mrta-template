import React, { useEffect, useState } from 'react'

import ButtonSend from '../../Components/Buttons/Button'

function TableRow(row) {
    const [id, setId] = useState(row.item.id);
    const [amount, setAmount] = useState(row.item.valor);
    const [status, setStatus] = useState('Pending');

    useEffect(() => {
        console.log('linha',row)
        
    });

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{amount}</td>
            <td>{status}</td>
            <td><ButtonSend onClick={e=> setStatus('Done')} text='send'/> </td>
        </tr>
    );
}


export default TableRow