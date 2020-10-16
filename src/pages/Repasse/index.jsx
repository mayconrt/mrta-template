import React, { useEffect, useState } from 'react'
import InputFile from '../../Components/Fields/InputText'
import TableRow from './tableRow'
import ButtonSendAll from '../../Components/Buttons/Button'
import FileReader from './teste'

import './style.css'

function Repasse(props) {
    const dataInitial = []
    const dataLoad = [
        // { 'ecommerce_id': '1', 'amount': '100' },
        // { 'ecommerce_id': '2', 'amount': '400' },
        // { 'ecommerce_id': '3', 'amount': '200' },
        // { 'ecommerce_id': '4', 'amount': '1000' },
    ]

    const [data, setData] = useState(dataLoad)

    useEffect(() => {
        // Should not ever set state during rendering, so do this in useEffect instead.
        console.log('teste')
    });
    // ****** END OF CHANGE ******   

    function setDados(dados){
        setData(dados)
        console.log(dados)
    }
    return (

        <div className="ma-repasse">
            <div className='ma-content-filter'>
                <ButtonSendAll text='send all' />
                <FileReader setData={setDados}/>
            </div>
            <div className='ma-content-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Ecommerce Id</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(row => (
                                <TableRow key={row.ecommerce_id} item={row} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Repasse