import React from 'react'
import { useParams } from 'react-router-dom';

const FullPostPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>This is the full post page with { id }</h1>
        </div>
    )
}

export default FullPostPage
