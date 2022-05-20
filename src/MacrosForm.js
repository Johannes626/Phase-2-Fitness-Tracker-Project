import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import WeeklyFilterDropDown from './WeeklyFilterDropDown';


function MacrosForm({handleDateOnChange, date, weeklyMealArray, setWeeklyMealArray}) {

   const [calendarToggle, setCalendarToggle] = useState(false);


  function handleCalendarToggle(e){
    setCalendarToggle(!calendarToggle)
  }

    // const [newWeek, setNewWeek] = useState({"name": "Uri"})
    
    
    function handleSubmit(event) {
      console.log(event) 
      event.preventDefault();
      
      const newWeek = {
        [date] : [
          {
            "id": 1,
            "day": "Monday",
            "calories": 0,
            "meals": [
              {
                "mealNumber": "1",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              }
            ]
          },
          {
            "id": 2,
            "day": "Tuesday",
            "calories": 0,
            "meals": [
              {
                "mealNumber": "1",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "2",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "3",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "4",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              }
            ]
          },
          {
            "id": 3,
            "day": "Wednesday",
            "calories": 0,
            "meals": [
              {
                "mealNumber": "1",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "2",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "3",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "4",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              }
            ]
          },
          {
            "id": 4,
            "day": "Thursday",
            "calories": 0,
            "meals": [
              {
                "mealNumber": "1",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "2",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "3",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "4",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              }
            ]
          },
          {
            "id": 5,
            "day": "Friday",
            "calories": 0,
            "meals": [
              {
                "mealNumber": "1",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "2",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "3",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "4",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              }
            ]
          },
          {
            "id": 6,
            "day": "Saturday",
            "calories": 0,
            "meals": [
              {
                "mealNumber": "1",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "2",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "3",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "4",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              }
            ]
          },
          {
            "id": 7,
            "day": "Sunday",
            "calories": 0,
            "meals": [
              {
                "mealNumber": "1",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "2",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "3",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              },
              {
                "mealNumber": "4",
                "protein": 0,
                "fats": 0,
                "carbs": 0
              }
            ]
          }
        ]
      }
       
        fetch("http://localhost:3001/dailyMacros", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newWeek)
        })
     setWeeklyMealArray([...weeklyMealArray, newWeek] )
      }
    
  return (
    <div>
      <form onSubmit={handleSubmit} id="date-form">
        <input 
        id="date-input"
        onChange={handleDateOnChange}
        type="date" 
        placeholder="Type in Monday's Date of New Week" 
        value={date}
        />
        <button type="submit">Submit</button>
      </form>
      <WeeklyFilterDropDown weeklyMealArray={weeklyMealArray} />
    </div>
  )
}

export default MacrosForm