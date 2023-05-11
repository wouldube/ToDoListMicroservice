interface ToDoList {
  dueDate: string;
  todoListName: string;
  tasks: string[];
}

export function organizeTasks(toDoLists: ToDoList[], sortDates: boolean): Record<string, Record<string, string[]>> {
  const organizedTasks: Record<string, Record<string, string[]>> = {};

  for (const list of toDoLists) {
    if (!organizedTasks[list.dueDate]) {
      organizedTasks[list.dueDate] = {};
    }
    organizedTasks[list.dueDate][list.todoListName] = list.tasks;
  }

  // Sort the dates in ascending order if the sortDates parameter is set to true
  if (sortDates) {
    const sortedOrganizedTasks: Record<string, Record<string, string[]>> = {};
    const sortedDates = Object.keys(organizedTasks).sort();

    for (const date of sortedDates) {
      sortedOrganizedTasks[date] = organizedTasks[date];
    }

    return sortedOrganizedTasks;
  }
/* 
  // Sort the dates in descending order if the sortDates parameter is set to true
  if (sortDates) {
    const sortedOrganizedTasks: Record<string, Record<string, string[]>> = {};
    const sortedDates = Object.keys(organizedTasks).sort((a, b) => {
      return new Date(b).getTime() - new Date(a).getTime();
    });
  
    for (const date of sortedDates) {
      sortedOrganizedTasks[date] = organizedTasks[date];
    }
  
    return sortedOrganizedTasks;
  } */

  return organizedTasks;
}

