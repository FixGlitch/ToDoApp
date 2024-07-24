import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types/taskTypes';
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  toggleTaskStatus,
  getAllTasksByCategoryAndUser,
  getTaskForToday,
  getAllCompletedTasks,
} from '../actions/taskActions';

interface TaskState {
  tasks: Task[];
  task: Task | null;
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  task: null,
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.task = action.payload;
        state.loading = false;
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllTasks.fulfilled,
        (state, action: PayloadAction<Task[]>) => {
          state.tasks = action.payload;
          state.loading = false;
        },
      )
      .addCase(getAllTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getTaskById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTaskById.fulfilled, (state, action: PayloadAction<Task>) => {
        state.task = action.payload;
        state.loading = false;
      })
      .addCase(getTaskById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<Task>) => {
        const index = state.tasks.findIndex(
          (task) => task.task_id === action.payload.task_id,
        );
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
        state.task = action.payload;
        state.loading = false;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>) => {
        state.tasks = state.tasks.filter(
          (task) => task.task_id !== action.payload,
        );
        state.loading = false;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(toggleTaskStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        toggleTaskStatus.fulfilled,
        (state, action: PayloadAction<Task>) => {
          state.loading = false;
          state.tasks = state.tasks.map((task) =>
            task.task_id === action.payload.task_id ? action.payload : task,
          );
        },
      )
      .addCase(toggleTaskStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllTasksByCategoryAndUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllTasksByCategoryAndUser.fulfilled,
        (state, action: PayloadAction<Task[]>) => {
          state.tasks = action.payload;
          state.loading = false;
        },
      )
      .addCase(getAllTasksByCategoryAndUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getTaskForToday.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getTaskForToday.fulfilled,
        (state, action: PayloadAction<Task>) => {
          state.task = action.payload;
          state.loading = false;
        },
      )
      .addCase(getTaskForToday.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllCompletedTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllCompletedTasks.fulfilled,
        (state, action: PayloadAction<Task[]>) => {
          state.tasks = action.payload;
          state.loading = false;
        },
      )
      .addCase(getAllCompletedTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default taskSlice.reducer;
