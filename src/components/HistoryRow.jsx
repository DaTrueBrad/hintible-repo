import React from 'react'
import { Link } from 'react-router-dom'

const HistoryRow = ({journey}) => {
  return (
    <div className='history-row'>

      <h4>{journey.title}</h4>
      <Link to={`/journey/${journey.id}`}>View</Link>
    </div>
  )
}

export default HistoryRow