import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createCategory } from '../../store/category/actions'


const AddCategory () {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const saveCategory = async e => {
    e.preventDefault();
    createCategory(dispatch)(name);
    setName('')
  }

    return (
        <div>
            <label htmlFor="category">
                Add new category
            </label>
            <form onSubmit={saveCategory}>
                <div>
                    <Input 
                        type='text'
                        id='category'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder = 'Category name'
                        required
                 />   
                </div>
                <button type='submit'>
                    save 
                </button>
                <Link to='/'>
                    <button type='button'>
                        cancel
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default AddCategory