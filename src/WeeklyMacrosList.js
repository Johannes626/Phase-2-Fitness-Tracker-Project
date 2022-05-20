import React from 'react'
import DailyMacrosCard from './DailyMacrosCard'


function WeeklyMacrosList({eachWeek}) {

  // console.log(eachWeek)

  const eachWeekArray = Object.entries(eachWeek)
  console.log(eachWeekArray[0][0])
  const mappingTheWeek = eachWeekArray[0][1].map((eachDay)=>{
    return <DailyMacrosCard key={eachDay.id} hi={"hi"} eachDay={eachDay} />
  })
  
  return (
    <div>
      <h1 className="date-title">{eachWeekArray[0][0]}</h1>
      {mappingTheWeek}
    </div>
  )
}

export default WeeklyMacrosList