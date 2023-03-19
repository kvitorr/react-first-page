import React from "react"

interface HeaderProps {
  name: string
}

interface Parts {
  parts:  { 
    part: string
    numberExercises: number
  } []
}

interface SinglePart {
    part: string
    numberExercises: number
}

const Header: React.FC<HeaderProps> = ({name}) => {
  return(
    <>
    <h1>{name}</h1>
    </>
  )
}

const Total: React.FC<Parts> = ({parts}) => {
  return(
    <>
      <p>Number of exercises {parts.reduce((previousValue: number, currentValue) => previousValue + currentValue.numberExercises, 0)}</p>

    </>  
  ) 
}

const Part: React.FC<SinglePart> = ({part, numberExercises}) => {
  return(
    <>
      <p>
        {part} {numberExercises}
      </p>
    </>  
  ) 
}

const Content: React.FC<Parts> = ({parts}) => {
  console.log(parts)
  return(
    <>
      {parts.map((singlePart: SinglePart) => {
        return <Part part={singlePart.part} numberExercises={singlePart.numberExercises}/>
      })}
    </>
  ) 
}

const App = () => {

  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [
      {
        part: 'Fundamentos da biblioteca React',
        numberExercises: 10
      },
      {
        part: 'Usando props para passar dados',
        numberExercises: 7
      },
      {
        part: 'Estado de um componente',
        numberExercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App