'use client'

import { useEffect, useState } from 'react'
import React from 'react'
import '../../styles/board.css'
import Link from 'next/link'
import ItemsServices from '../../services/items.services'



const itemsList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const itemsService = new ItemsServices()
        loadItems(itemsService)
    }, [])


    const loadItems = (itemsService) => {
        itemsService
            .getAllItems()
            .then(response => {
                setItems(response.data)
            })
            .catch(err => console.log(err))


    }

    return (
        <div>
            <h1>Item Board</h1>
            {items ? (
                <table>
                    <thead>
                        <tr>
                            <th>Referencia</th>
                            <th>Nombre</th>
                            <th>PVP</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (

                            <tr>
                                <td>{item.reference}</td>
                                <td>{item.name}</td>
                                <td>{item.cost}</td>
                                <td><Link href={{ pathname: '/details', query: { id: item.id } }} >
                                    Click
                                </Link></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Cargando items...</p>
            )
            }
        </div >
    );

}

export default itemsList
