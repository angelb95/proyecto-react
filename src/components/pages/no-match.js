import React from 'react';
import{ Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div>
        <h2>we couldn't find that page</h2>
        <Link to="/">return to home page</Link>
    </div>
  )
}
