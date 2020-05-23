import { CommentSchema } from './Comment.type';
import { WithId } from '../services/utils';

export interface UserSchema extends WithId {
  name: string;
  email: string;
  password: string;
  comments: CommentSchema[];
}
