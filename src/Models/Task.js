// src/models/Task.js
import { Model } from '@nozbe/watermelondb';
import { field, date, readonly } from '@nozbe/watermelondb/decorators';

export default class Task extends Model {
  static table = 'tasks';

  @field('title') title;
  @field('is_completed') isCompleted;
  @date('created_at') createdAt;
}
