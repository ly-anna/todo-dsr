import React from 'react';

const TodoItem = ({ id, title, description, createdBy }) => (
  <li key={id}>
    <span>{id}</span>
    <span>
      , title:
      {title}
    </span>
    <span>
      , description:
      {description}
    </span>
    <span>
      , createdBy:
      {createdBy}
    </span>
  </li>
);

export default TodoItem;
