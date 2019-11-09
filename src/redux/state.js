const store = {
  _state: {
    profilePage: {
      posts: [{
        id: 1,
        name: 'Post1',
        likesCount: 12,
      },
      {
        id: 2,
        name: 'Post2',
        likesCount: 13,
      },
      {
        id: 3,
        name: 'Post3',
        likesCount: 34,
      },
      {
        id: 4,
        name: 'Post4',
        likesCount: 123,
      },
      {
        id: 5,
        name: 'Post5',
        likesCount: 1,
      },
      ],
      newPostText: 'new post text',
    },
    dialogsPage: {
      dialogs: [{
        id: 1,
        name: 'Nikita',
      },
      {
        id: 2,
        name: 'Viktor',
      },
      {
        id: 3,
        name: 'Sveta',
      },
      {
        id: 4,
        name: 'Sasha',
      },
      {
        id: 5,
        name: 'Pasha',
      },
      ],
      messages: [{
        message: 'Message1',
      },
      {
        message: 'Message2',
      },
      {
        message: 'Message3',
      },
      {
        message: 'Message4',
      },
      {
        message: 'Message5',
      },
      ],
    },
  },
  getState() {
    return this._state
  },
  rerenderEntireTree() {},
  subscribe(observer) {
    this.rerenderEntireTree = observer
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: 6,
        name: action.postMessage,
        likesCount: 0,
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this.rerenderEntireTree()
    }
    if (action.type === 'UPDATE-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this.rerenderEntireTree()
    }
  },
}

window.state = store.getState()
export default store
