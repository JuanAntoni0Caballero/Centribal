import React from 'react'
import '../../styles/board.css'
import data from '../../db.json';

const ordersList = () => {
    return (
        <div>
            <h1>Order Board</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PVP</th>
                        <th>Precio total</th>
                    </tr>
                </thead>
                <tbody>
                    {data.order.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.costWhitoutTax}</td>
                            <td>{order.costWhitTax}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ordersList;
