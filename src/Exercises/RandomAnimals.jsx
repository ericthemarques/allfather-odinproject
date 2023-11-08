import React from 'react'

function RandomAnimals() {
    const animals = ['Cat', 'Lion', 'Ocelot'];
    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

  return (
    <>
        <h1>Animals</h1>
        <ul>
            {animalsList}
        </ul>
    </>
  )
}


export default RandomAnimals