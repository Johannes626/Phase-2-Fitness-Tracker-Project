import React from 'react'

function EachMealCard({eachMeal}) {
  
  const {mealNumber, protein, fats, carbs} = eachMeal
  
  return (
    <div className="meal-card">
        <h3>{`Meal: ${mealNumber}`}</h3>
        <h4>{`Protein: ${protein}`}</h4>
        <h4>{`Fats: ${fats}`}</h4>
        <h4>{`Carbs: ${carbs}`}</h4>
    </div>
  )
}

export default EachMealCard