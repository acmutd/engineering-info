const KEY_TASKS = 'tasks';

/**
 * Save a task to device storage.
 *
 * @param {TaskItem} task The task to store.
 */
function saveTask(task) {
  const allTasks = JSON.parse(localStorage.getItem(KEY_TASKS) || '[]');
  allTasks.push(task);
  localStorage.setItem(KEY_TASKS, JSON.stringify(allTasks));
}

/**
 * Returns all the tasks for the app from device storage.
 */
function loadTasks() {
  return [];
}