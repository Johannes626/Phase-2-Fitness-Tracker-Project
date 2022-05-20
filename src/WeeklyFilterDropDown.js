import React from 'react'

function WeeklyFilterDropDown({weeklyMealArray}) {

    console.log(weeklyMealArray)

  const weeklyMealArrayMap = weeklyMealArray.map((eachWeek)=>{
    const weekArr = Object.entries(eachWeek)
    const dailyData = weekArr[0][1]
    const eachDayInfo = dailyData.map((eachDay)=>{
      console.log(eachDay)
      return(
        <option>{eachDay.day}</option>
      )
    })
    console.log(eachDayInfo)
    return eachDayInfo
  })

  
    

    // console.log(newWeeklyMealArray)
    // const mappingMealArray = newWeeklyMealArray.map((eachWeek) => {
    //     console.log(eachWeek)
    //     return(
    //       <option key={eachWeek.id}>{eachWeek}</option>
    //     )
    // }) 
  return (
    <div>
        <select>
          {weeklyMealArrayMap}
        </select>
    </div>
  )
}

export default WeeklyFilterDropDown