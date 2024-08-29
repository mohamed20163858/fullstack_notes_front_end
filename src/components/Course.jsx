const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
      <p>
        total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
        exercises
      </p>
    </div>
  );
};

export default Course;
