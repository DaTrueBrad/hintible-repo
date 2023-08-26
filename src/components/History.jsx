import React from 'react'
import { Link } from 'react-router-dom'
import HistoryRow from './HistoryRow'

const History = ({history}) => {
  let displayInfo = history.map((j) => {
    return <HistoryRow journey={j} />
  })
  return (
    <div className='history-container'>
      {displayInfo}
      {/* <Link to='/journey/7'>Test</Link> */}
    </div>
  )
}

export default History