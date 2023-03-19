interface Course {
  title?: string;
  part?: string;
  numberExercises?: number;
  totalNumberExercises?: number;
}

const Header = ({ title }: Course) => {
  return(
    <>
    <h1>{title}</h1>
    </>
  )
}

const Total = ({totalNumberExercises}: Course) => {
  return(
    <>
      <p>Number of exercises {totalNumberExercises}</p>
    </>  
  ) 
}

const Part = ({part, numberExercises}: Course) => {
  return(
    <>
      <p>
        {part} {numberExercises}
      </p>
    </>  
  ) 
}

const Content = ({course}: {course: Course[]}) => {
  return(
    <>
      {course.map((course: any) => (
        <Part key={course.part} part={course.part} numberExercises={course.numberExercises} />
      ))}
    </>
  ) 
}

const App = () => {
  const courseTitle = 'Desenvolvimento de aplicação Half Stack'

  const content = [
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

  return (
    <div>
      <Header title={courseTitle}/>
      <Content course={content}/>
      <Total totalNumberExercises={10+7+14}/>
    </div>
  )
}

export default App