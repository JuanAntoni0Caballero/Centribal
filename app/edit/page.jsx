'use client'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useEffect, useState } from 'react'
import itemsServices from '../../services/items.services'
import Link from 'next/link'



const editForm = ({ searchParams }) => {


    if (!searchParams) {
        return <div>Cargando...</div>
    }

    const itemId = searchParams.id


    const [item, setItem] = useState({
        reference: '',
        name: '',
        description: '',
        cost: '',
        tax: '',

    })

    useEffect(() => {
        const itemsService = new itemsServices()
        loadOneItem(itemsService)
    }, [])



    const handleInputChange = e => {
        let { value, name } = e.target

        if (value < 0) value = 0

        setItem({ ...item, [name]: value })
    }


    const handleFormSubmit = e => {

        e.preventDefault()

        itemsServices
            .editItem(itemId, item)
            .then(() => setShowEditPlanModal(false))
            .catch(err => setErrors(err.response.data.errorMessages))
    }


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
            <form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={item.name} onChange={handleInputChange} name="name" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="origin">
                    <Form.Label>Reference</Form.Label>
                    <Form.Control type="text" value={item.reference} onChange={handleInputChange} name="reference" />
                </Form.Group>
                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3" controlId="origin">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={item.description} onChange={handleInputChange} name="description" />
                    </Form.Group>
                </Col>

                <Col md={{ span: 6 }}>
                    <Form.Group className="mb-3" controlId="destination">
                        <Form.Label>cost</Form.Label>
                        <Form.Control type="number" value={item.cost} onChange={handleInputChange} name="cost" />
                    </Form.Group>
                </Col>

                <Form.Group className="mb-3" controlId="destination">
                    <Form.Label>Tax</Form.Label>
                    <Form.Control type="number" value={item.tax} onChange={handleInputChange} name="tax" />
                </Form.Group>
                <Button type="submit">Save</Button>
            </form>
        </div>
    )
}

export default editForm