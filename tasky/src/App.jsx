import React, { useState } from 'react';


import './App.css';
import Task from './components/Task';

//added a new priority prop to the task component and passed it down form the app component.

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today", priority: "Low" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium" },
      { id: 3, title: "Tidy up", description: "Clean the living room", deadline: "Today", priority: "High" }
    ]
  });



  return (
    <div className="container">
      <h1>Tasky</h1>

      {taskState.tasks.map((task) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          // task.priority is passed down as a prop to the Task component, allowing it to be displayed in the task card.
          priority={task.priority}
          key={task.id}
        />
      ))}

    </div>
  );

}

export default App;
