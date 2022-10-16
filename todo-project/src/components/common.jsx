import React from 'react'

function Common({item}) {
  return (
      <ul className="list-group list-group-flush">
          <li className="list-group-item">{item.details}</li>
          <li className="list-group-item">{item.description}</li>

      </ul>
  )
}

export default Common