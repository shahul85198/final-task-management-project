import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../store/category/actions';


export default function CategoryList() {
    const dispatch = useDispatch();
    const {categories = []} = useSlector(state => state.category)

    useEffect(() => {
        getAllCategories(dispatch)()
    }, [])

    return <div>
        List of categories
        <ul>
            {categories.map(({id, name}) => <li key={id}>{name}</li>)}
           </ul> 
    </div>
}


