'use client'
import React, { useState } from 'react';

const OrderManagement = () => {
    const [orders, setOrders] = useState([
        { id: 101, item: 'Laptop', status: 'Pending' },
        { id: 102, item: 'Smartphone', status: 'Pending' }
    ]);

    const updateStatus = (index, newStatus) => {
        const updatedOrders = [...orders];
        updatedOrders[index].status = newStatus;
        setOrders(updatedOrders);
        alert(`Order status updated to: ${newStatus}`);
    };

    const removeOrder = (index) => {
        if (window.confirm('Are you sure you want to remove this order?')) {
            const updatedOrders = orders.filter((_, i) => i !== index);
            setOrders(updatedOrders);
        }
    };

    return (
        <div className=''>
            <div className=''>
                <h2>Manage Orders</h2>
                <table className=''>
                    <thead>
                        <tr>
                            <th style={styles.th}>Order ID</th>
                            <th style={styles.th}>Item</th>
                            <th style={styles.th}>Status</th>
                            <th style={styles.th}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.id}>
                                <td style={styles.td}>{`#${order.id}`}</td>
                                <td style={styles.td}>{order.item}</td>
                                <td style={styles.td}>
                                    <select style={styles.select} value={order.status} onChange={(e) => updateStatus(index, e.target.value)}>
                                        <option value="Pending">Pending</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Delivered">Delivered</option>
                                    </select>
                                </td>
                                <td style={styles.td}>
                                    <button style={styles.button} onClick={() => removeOrder(index)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const styles = {
    th: { padding: '10px', border: '1px solid #ddd', textAlign: 'center', background: '#007bff', color: 'white' },
    td: { padding: '10px', border: '1px solid #ddd', textAlign: 'center' },
    select: { padding: '5px' },
    button: { background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '5px' }
};

export default OrderManagement;
