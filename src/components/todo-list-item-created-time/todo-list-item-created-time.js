/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import "./todo-list-item-created-time.css";

function TodoListItemCreatedTime() {
  const [createdTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const timePassed = formatDistanceToNow(createdTime, {
    includeSeconds: true,
    addSuffix: true,
  });
  return <span className="created">Created {timePassed}</span>;
}

export default TodoListItemCreatedTime;
