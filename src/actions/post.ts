import { ThunkAction } from 'redux-thunk';
import { gql } from 'apollo-boost';

import { Client } from '../services/withApollo';
import { RootState } from '../reducers';

const addPost = (newPost: any): ThunkAction<Promise<boolean>, RootState, Client, any> => async (dispatch, _getState, apolloClient): Promise<boolean> => {
  try {
    const res = await apolloClient().mutate({
      mutation: gql`
        mutation addPost($newPost: AddPostInput) {
          addPost(newPost: $newPost) {
            title
          }
        }
      `,
      variables: newPost,
    });

    console.log(res);

    // dispatch({
    //   type: Post.ADD_POST,
    //   payload: res,
    // });

    return true;
  } catch (e) {
    console.log(e);

    return false;
  }
};

export { addPost };
