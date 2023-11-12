import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import useSWR, {mutate} from 'swr'


const ProductList = () => {
    const fetcher = async () => {
        const response  = await axios.get('https://silver-telegram-4p4v4r9x75c99-5000.app.github.dev/tasks')
        return response.data
    }

    const {data} = useSWR('products', fetcher)
    if (!data) {
        return <h2>Loading</h2>
    }

    const deleteProduct = async taskId => {
        await axios.delete(`/tasks/${taskId}`)
        mutate('products')
    }


    return (
        <div>
            <div>
                <Link to='/add'>
                    <button type='button'>
                        Add New Product
                    </button>
                </Link>
                <div>
                    <tabel>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Price
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length !== 0 ? (
                                data.map((task, index) => (
                                    <tr key={task.id}>
                                    <td>{index + 1}</td>
                                    <th>
                                        {task.name}
                                    </th>
                                    <td>{task.price}</td>
                                    <td>
                                        <Link to={`/edit/${task.id}`}>
                                            <button type='button'>
                                                Edit
                                            </button>
                                        </Link>
                                        <button type='button'>
                                            Delete
                                        </button>
                                    </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td>
                                        Tidak Ada Data
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </tabel>
                </div>
            </div>
        </div>
            
    )
}

export default ProductList