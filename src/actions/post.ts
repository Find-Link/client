import { ThunkAction } from 'redux-thunk';
import { gql } from 'apollo-boost';
import Post, {
  AddPostAction, ListPostAction, PostSchema, postDefs,
} from './post.type';

import { Client } from '../services/withApollo';
import { RootState } from '../reducers';

const addPost = (newPost: any): ThunkAction<Promise<boolean>, RootState, Client, AddPostAction> => async (dispatch, _getState, apolloClient): Promise<boolean> => {
  try {
    const { data } = await apolloClient().mutate<{ addPost: PostSchema}>({
      mutation: gql`
        mutation addPost($title: String, $thumbnail: Upload, $description: String, $listLinks: [ListLinkInput], $sources: [SourceInput], $tags: [String], $category: String) {
          addPost(title: $title, thumbnail: $thumbnail, description: $description, listLinks: $listLinks, sources: $sources, tags: $tags, category: $category) {
            ${postDefs}
          }
        }
      `,
      variables: newPost,
    });

    if (data) {
      dispatch({
        type: Post.ADD_POST,
        payload: data.addPost,
      });

      return true;
    }

    return false;
  } catch (e) {
    console.log(e);

    return false;
  }
};

const getPosts = (): ThunkAction<Promise<boolean>, RootState, Client, ListPostAction> => async (dispatch, _getState, apolloClient): Promise<boolean> => {
  try {
    const { data } = await apolloClient().query<{ posts: PostSchema[]}>({
      query: gql`
        {
          posts{
            ${postDefs}
          }
        }
      `,
    });

    if (data) {
      dispatch({
        type: Post.LIST_POST,
        payload: data.posts,
      });

      return true;
    }

    return false;
  } catch (e) {
    console.log(e);

    return false;
  }
};

export { addPost, getPosts };
