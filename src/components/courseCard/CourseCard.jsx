import React from 'react';
import './CourseCard.scss'

const CourseCard = ({ course }) => {
  const {
    image,
    level,
    title,
    user,
    rating,
    students,
    modules,
    duration,
    finishedModules,
    isMyCource
  } = course;

  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);

  return (
    <div className="card">
      <div className="image__container">
        <img src={image} alt={title} />
        <div className="level">{level}</div>
      </div>
      <h3 className="card__title">{title}</h3>

      <div className="card__info">
        <div className="user">
          <img src={user.avatar} alt={user.name} />
          <p>{user.name}</p>
        </div>
        <div className="rating">
          <p>{rating}</p>
        </div>
      </div>

      {isMyCource && (
        <div>
          <progress value={(finishedModules / modules) * 100} max="100">
            {(finishedModules / modules) * 100}%
          </progress>
          <div className="card__info">
            <p>
              {finishedModules} / {modules} Modules
            </p>
            <div>{(finishedModules / modules) * 100} %</div>
          </div>
        </div>
      )}

      <div className="card__info">
        <div>{students} Students</div>
        <div>{modules} Modules</div>
        <div>
          {hours}h {minutes}m
        </div>
      </div>
    </div>
  );
};

export default CourseCard;