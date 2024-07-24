export interface Task {
  task_id?: string;
  name: string;
  description: string;
  isCompleted: boolean;
  category_id: string;
  user_id: string | undefined;
}
