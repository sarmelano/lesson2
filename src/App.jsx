
import React from 'react';
import CourseCard from './components/courseCard/CourseCard.jsx';
import cources from './data.js'; 

const App = () => {
  return (
    <div>
      {cources.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;
/* React использует ключи, чтобы идентифицировать, какие элементы были изменены, добавлены или удалены */