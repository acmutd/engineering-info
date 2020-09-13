const ADD_TASK_ACTION = 'tasks/addTask';

const TOGGLE_TASK_ACTION = 'tasks/toggleTask';

/**
 * Returns an action creator that adds a task to the store.
 *
 * @param {TodoItem} todo A new task to store.
 */
const addTask = (task) => ({
  type: ADD_TASK_ACTION,
  payload: task,
});

/**
 * Returns an action creator that toggles the "done" status of a task. 
 *
 * @param {string} taskId The task identifier
 * @param {boolean} isDone The new completion state of the task
 */
const toggleTask = (taskId, isDone) => ({
  type: TOGGLE_TASK_ACTION,
  payload: {
    taskId,
    done,
  },
});

const initialState = {
  tasks: [],
};

/**
 * The app's root data reducer.
 *
 * @param state The current state of the app
 * @param action The action to update the store.
 */
function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_ACTION:
      state.tasks.push(action.payload);
      return state;
    case TOGGLE_TASK_ACTION:
      const newTasks = state.tasks.map(task => {
        if (task.id === action.payload.taskId) {
          task.done = action.payload.done;
        }
      });
      const newState = {
        tasks: newTasks,
      };
      return newState;
  }
  return state;
}

/**
 * Return the app's data store.
 */
function getStore() {
  const store = Redux.createStore(taskReducer);
  return store;
}