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
        default:
            return state;
    }

};

const store = createStore(reducer, initialState);
store.subscribe(() => console.log(store.getState()));

export default store;