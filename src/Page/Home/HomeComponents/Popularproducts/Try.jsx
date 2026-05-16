import React from 'react'
import useData from '../../../../Hooks/useData'

const Try = () => {
    const {pono} = useData()
  return (
      <div>
          {pono.map((ponoo) => (<h1>{ ponoo.name }</h1>))}
          

    </div>
  )
}

export default Try