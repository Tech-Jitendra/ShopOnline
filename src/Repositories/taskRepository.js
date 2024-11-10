// src/repositories/taskRepository.js
export const addTask = async (database, title) => {
    await database.write(async () => {
      await database.collections.get('tasks').create(task => {
        task.title = title;
        task.isCompleted = false;
        task.createdAt = Date.now();
      });
    });
  };
  
  export const fetchTasks = async (database) => {
    const tasks = await database.collections.get('tasks').query().fetch();
    return tasks;
  };
  