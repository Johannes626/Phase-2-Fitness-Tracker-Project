import './App.css'
import React from 'react'
import {useEffect, useState} from 'react'
import WeeklyMacrosList from './WeeklyMacrosList'
import MacrosForm from './MacrosForm';




function App() {

  const [weeklyMealArray, setWeeklyMealArray] = useState([]);
  const [date, setDate] = useState("")

  const handleDateOnChange = (e) => {
    setDate(e.target.value)
  }
 
  // console.log(weeklyMealArray)
  const renderEachDay = () => weeklyMealArray.map((eachWeek, i) => {
    return <WeeklyMacrosList key={i} eachWeek={eachWeek}/>
  })

  useEffect(()=>{
    fetch("http://localhost:3001/dailyMacros") 
    .then(resp => resp.json())
    .then(arrayOfMeals => {
      setWeeklyMealArray(arrayOfMeals)
    })
  }, [])

  return (
    <div className="App">
      <MacrosForm setWeeklyMealArray={setWeeklyMealArray} weeklyMealArray={weeklyMealArray} handleDateOnChange={handleDateOnChange} 
      date={date} />
      {renderEachDay()} 
    </div>
  );
}

//-----------------------------------------
//
// APP L>
//     Header
//       L> NavBar
//          L> About
//          L> NutritionInfo
//          L> CreatorPage
//     SearchBar
//     DailyMacrosForm
//       L> PastDaysDropDown
//     WeeklyMacrosList
//       L> DailyMacrosList
//         L> MealMacros 
//       L> TotalMacros
// 
//-----------------------------------------
//
//       Calculations
// Macros(1g)  --> Calories
// Fat(f)        --> 9 calories
// Carbs(c)       --> 4 calories 
// Protein(p)    --> 4 calories
// calories = (f * 9) + (c * 4) + (p * 4)
//
//-----------------------------------------
//
//
export default App;
