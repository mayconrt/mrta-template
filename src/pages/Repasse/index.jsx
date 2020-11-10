import React, { useEffect, useState } from 'react'
import InputFile from '../../Components/Fields/InputText'
import TableRow from './tableRow'
import ButtonSendAll from '../../Components/Buttons/Button'
import FileReader from './teste'
import Container from '../../Components/Containers'

import api from '../../service/repasse'

import './style.css'

function Repasse(props) {
    const dataLoad = []
    const logProcess = []
    //const logProcess = []


    const [data, setData] = useState(dataLoad)
    const [log, setLog] = useState(logProcess)

    useEffect(() => {
        // Should not ever set state during rendering, so do this in useEffect instead.
        console.log('teste')
    });


    function setDados(dados) {
        setData(dados)
    }

    function setLogProcess(msg) {
        const logs = []
        logs.push(msg)
        setLog(log => [...log, logs])

    }

    async function sendAllRepasse() {
        data.map(async row => (
            await sendRepasse(row.id, row.valor)
        ))

    }

    async function sendRepasse(id, amount) {
        try {
            const response = await api.get(`${id}/${amount}`)
            if (response.status == 200) {
                console.log(response.data)
                if (response.data) {
                    setLogProcess(
                        `SUCCESS - ecommerce_id: ${id} amount: ${response.data.amount} ` +
                        `transaction_id: ${response.data.id} status: ${response.data.status} ` +
                        `created_at: ${response.data.createdAt} holderName: ${response.data.bankAccount.holderName}`
                    )
                } else {
                    setLogProcess(
                        `SUCCESS - ecommerce_id: ${id} amount: ${amount} - RETORNO NÃO TRATADO (VALIDAR)`
                    )
                }
            } else {
                if (response.data) {
                    setLogProcess(`ERROR - ecommerce_id: ${id} amount: ${amount} msg: ${response.data.message}`)
                } else {
                    setLogProcess(`ERROR - ecommerce_id: ${id} amount: ${amount} msg: RETORNO NÃO TRATADO (VALIDAR)`)
                }
            }
        } catch (error) {
            if (error.data) {
                setLogProcess(`ERROR - ecommerce_id: ${id} amount: ${amount} msg: ${error.response.data.message}`)
            }else{
                setLogProcess(`ERROR - ecommerce_id: ${id} amount: ${amount} msg: RETORNO NÃO TRATADO (VALIDAR) ${new Date()}`)
            }
        }
    }

    return (
        <Container title='Sheets'>
            <div className="ma-repasse">
                <div className='ma-content-filter'>
                    <ButtonSendAll text='send all' onClick={sendAllRepasse} />
                    <FileReader setData={setDados} />
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
                                    <TableRow key={row.ecommerce_id} item={row} setLog={setLogProcess} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className='ma-log'>
                    {
                        log.map(item => (
                            <p>{item}</p>
                        ))
                    }

                </div>
            </div>
        </Container>

    )
}

export default Repasse