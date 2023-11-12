import React, { useEffect, useState } from "react";
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'


const EditProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        const getProductById = async () => {
    const response = await axios.get(`/tasks/${id}`)
    setName(response.data.name)
    setPrice(response.data.price)
        }
        getProductById()
    }, [id])

    const updateProduct = async e => {
        e.preventDfault()
        await axios.patch(`/tasks/${id}`, { name: name, price: parseInt(price)})
        navigate('/')
    }


    return (
        <div>
            <form onSubmit={updateProduct}>
                <div>
                    <label htmlFor="email">
                        Name
                    </label>
                    <input
                       type='text'
                       id='name'
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
                    update
                </button>
                <Link to='/'>
                </Link>
            </form>
        </div>
    )
}

export default EditProduct