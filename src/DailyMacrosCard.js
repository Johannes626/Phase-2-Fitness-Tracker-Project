import React from 'react'
import EachMealCard from "./EachMealCard"

function DailyMacrosCard({eachDay}) {

//   console.log(eachDay)

  const mappingTheDay =
    eachDay.meals.map((eachMeal) =>{
        // console.log(eachMeal)
      return <EachMealCard key={eachMeal.mealNumber} eachMeal={eachMeal} />
    })


  return(
    <div className="day-card">
        <h1 className="day-title">{eachDay.day}</h1>
        <h2>{`Total Daily Calories:  ${eachDay.calories}`}</h2>
      {mappingTheDay}
    </div>
  )
}

export default DailyMacrosCard