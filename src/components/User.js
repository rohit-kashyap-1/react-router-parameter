import React from 'react'

export default function User(props) {
//id =  1

//axios =  1 pass
    const users = [
        {id:1,name:"Rohit kumar",course:"B.Tech"},
        {id:2,name:"Vansh Mishra",course:"M.Tech"},
        {id:3,name:"Druvh ",course:"BCA"},
        {id:4,name:"Vanisha ",course:"B.Sc."},
        {id:5,name:"Sunita",course:"Data Science"},
        {id:6,name:"Anita",course:"LLM"},
    ]

 let data = users[props.id-1]
  return (
    <section className='py-4'>
        <div className='container'>
            <h1>{data.name}</h1>
            <h2>{data.course}</h2>
            <h3>{data.id}</h3>
        </div>
    </section>
  )
}
