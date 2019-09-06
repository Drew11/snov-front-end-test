import {createStore} from 'redux';

const initialState = {
    users: [],
    posts: [],
    visiblePosts: [],
    activeUser: null,
    searchQuery: '',
    comments: [],
};

const reducer = (state, action) => {

    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.users

            };
        case "SET_POSTS":
            return {
                ...state,
                posts: action.posts

            };
        case "SET_VISIBLE_POSTS":
            return {
                ...state,
                visiblePosts: action.visiblePosts
            };

        case "SET_ACTIVE_USER":
            return {
                ...state,
                activeUser: action.activeUser
            };
        case "SET_SEARCH_QUERY":
            return {
                ...state,
                searchQuery: action.searchQuery
            };
        case "ADD_COMMENT":
            const copy = [...state.comments];
            copy.push(action.comment);

            return {
                ...state,
                comments: copy
            };
        case "SET_EDIT_COMMENT":

             const updateComments =  state.comments.map((comment,index)=>{
                 const copyComment = {...comment};

                 if(index===action.indexComment){
                     copyComment.text = action.editingComment;
                 }

                 return copyComment;
             });

            return {
              ...state,
              comments: updateComments
            };

        case "REMOVE_COMMENT":
          const copyComments = [...state.comments];
          const updateCommentsRemove = copyComments.filter((comment, index)=>index !== action.indexComment);

          return {
            ...state,
            comments: updateCommentsRemove
          };

        default:
            return state;
    }

};

const store = createStore(reducer, initialState);
store.subscribe(() => console.log(store.getState()));

export default store;