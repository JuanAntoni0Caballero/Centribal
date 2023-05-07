'use client'

import { useEffect, useState } from 'react'
import itemsServices from '../../services/items.services'
import Link from 'next/link'
import '../../styles/board.css'

const ItemsDetails = ({ searchParams }) => {

    if (!searchParams) {
        return <div>Cargando...</div>
    }

    const itemId = searchParams.id


    const [item, setItem] = useState([])

    useEffect(() => {
        const itemsService = new itemsServices()
        loadOneItem(itemsService)
    }, [])


    const loadOneItem = (itemsService) => {
        itemsService
            .getOneItem(itemId)
            .then(response => {
                console.log('LA DATA ==>', response.data)
                setItem(response.data)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Detalles del item {item.name}</h1>
            {item ? (
                <table>
                    <thead>
                        <tr>
                            <th>Referencia</th>
                            <th>Nombre</th>
                            <th>Description</th>
                            <th>PVP</th>
                            <th>Tax</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{item.reference}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.cost}</td>
                            <td>{item.tax}</td>
                            <td><Link href={{ pathname: '/edit', query: { id: item.id } }} >
                                Edit
                            </Link></td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Cargando items...</p>
            )
            }
        </div>
    )
}

export default ItemsDetails
