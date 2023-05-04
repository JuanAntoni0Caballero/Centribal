import React from 'react'
import '../../styles/board.css'
import data from '../../db.json'
import Link from 'next/link'

const itemsList = () => {
    return (
        <div>
            <h1>Item Board</h1>
            <table>
                <thead>
                    <tr>
                        <th>Referencia</th>
                        <th>Nombre</th>
                        <th>PVP</th>
                    </tr>
                </thead>
                <tbody>
                    {data.items.map((item) => (
                        <tr key={item.reference}>
                            <td>{item.reference}</td>
                            <td>{item.name}</td>
                            <td>{item.cost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default itemsList
