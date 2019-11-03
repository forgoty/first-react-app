let rerenderEntireTree = () => {
}

let dialogsData = [{
    id: 1,
    name: 'Nikita'
  },
  {
    id: 2,
    name: 'Viktor'
  },
  {
    id: 3,
    name: 'Sveta'
  },
  {
    id: 4,
    name: 'Sasha'
  },
  {
    id: 5,
    name: 'Pasha'
  },
]

let messagesData = [{
    message: 'Message1'
  },
  {
    message: 'Message2'
  },
  {
    message: 'Message3'
  },
  {
    message: 'Message4'
  },
  {
    message: 'Message5'
  },
]

let postsData = [{
    id: 1,
    name: 'Post1',
    likesCount: 12
  },
  {
    id: 2,
    name: 'Post2',
    likesCount: 13
  },
  {
    id: 3,
    name: 'Post3',
    likesCount: 34
  },
  {
    id: 4,
    name: 'Post4',
    likesCount: 123
  },
  {
    id: 5,
    name: 'Post5',
    likesCount: 1
  },
]

export let state = {
    profilePage: {
        posts: postsData,
        newPostText: 'new post text'
    },
    dialogsPage: {
        dialogs: dialogsData,
        messages: messagesData,
    },
}

window.state = state

export const addPost = (postMessage) => {
    let newPost = {
        id: 6,
        name: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree()
}

export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}
