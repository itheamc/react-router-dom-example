import React from 'react'
import { useQuery } from '../components/hooks/CustomHooks';

const SearchPage = () => {
    const query = useQuery();

    
    return (
        <div>
            <h1>You have search --- {query.get('q')}</h1>
        </div>
    )
}

export default SearchPage
