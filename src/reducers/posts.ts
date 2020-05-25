import Post, { ListPostAction, PostSchema, AddPostAction } from '../actions/post.type';

type PostAction = AddPostAction | ListPostAction;

export default function (state: PostSchema[] = [], action: PostAction): PostSchema[] {
  switch (action.type) {
    case Post.ADD_POST:
      return [action.payload, ...state];
    case Post.LIST_POST:
      return action.payload;
    default:
      return state;
  }
}
