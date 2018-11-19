export type Post = {
  title: string
};

export type State = {
  +selectedSubreddit: string,
  +postsBySubreddit: {
    selectedSubreddit: {
      isFetching?: boolean,
      didInvalidate: boolean,
      items?: Array<Post>,
      lastUpdated?: Date
    }
  }
};

export type Action = {
  type: string,
  subreddit: string,
  posts?: Array<Post>,
  receivedAt?: Date
};

export type PromiseAction = Promise<Action>;
// eslint-disable-next-line no-use-before-define
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => void;
export type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void;
