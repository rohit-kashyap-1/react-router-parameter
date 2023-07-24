import React from 'react'

import { useParams } from 'react-router-dom'


//id
// to fetch data from an server via api
export default function Article() {

  const {id} = useParams()
  return (
    <div className='section py-4'>
        <div className='container'>
                <h1>Article {id}</h1>
        </div>
    </div>
  )
}
