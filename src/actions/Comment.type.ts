import { PostSchema } from './post.type';
import { UserSchema } from './User.type';
import { WithId } from '../services/utils';

export interface CommentSchema extends WithId {
  content: string;
  user: UserSchema;
  post: PostSchema;
}
