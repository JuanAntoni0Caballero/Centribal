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
                console.log('LA DATA ==>', response.data)
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
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (

                            <tr>
                                <td><Link
                                    key={item.id}
                                    href={`/items/${item.id}`}
                                >{item.reference}</Link></td>
                                <td>{item.name}</td>
                                <td>{item.cost}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Cargando items...</p>
            )}
        </div>
    );

}

export default itemsList
