import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const AddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()

    const saveProduct = async e => {
        e.preventDefault()
        await axios.post('/tasks', { name: name, price: parseInt(price)})
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={saveProduct}>
                <div>
                    <label htmlFor="email">
                        Name
                    </label>
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Product name"
                        required
                        />
                </div>
                <div>
                    <label htmlFor="price">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        placeholder="Product price"
                        required
                     />   
                </div>
                <button type="submit">
                    Save
                </button>
                <Link to='/'>
                    <button type="button">
                        Cancel
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default AddProduct
