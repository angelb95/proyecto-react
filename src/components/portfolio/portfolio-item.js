import React from 'react';
// eslint-disable-next-line import/no-anonymous-default-export
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-anonymous-default-export
export default function(props) {
    return(
        <div>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>

            <Link to={`/portfolio/${props.slug}`}>Link</Link>
            </div>
    );
}