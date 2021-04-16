import axios from 'axios';

import { BASE_URL } from '../config';

// Define action types
export const GET_BOOKS = 'GET_BOOKS';
export const LOAD_MORE = 'LOAD_MORE';
export const ADD_TO_BOOKMARK_LIST = 'ADD_TO_BOOKMARK_LIST';
export const REMOVE_FROM_BOOKMARK_LIST = 'REMOVE_FROM_BOOKMARK_LIST';
const PAGE_SIZE = 15;
// Define action creators

export const getBooks = () => {
  try {
    return async dispatch => {
      const response = await axios.get(`${BASE_URL}?_limit=${PAGE_SIZE}`);
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: GET_BOOKS,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const loadMore = (page) => {
    try {
        return async dispatch => {
            const response = await axios.get(`${BASE_URL}?_limit=${PAGE_SIZE}&_page=${page}`);
            // console.log('DATA ========>', response.data);
            if (response.data) {
                dispatch({
                    type: LOAD_MORE,
                    payload: response.data
                });
            } else {
                console.log('Unable to fetch data from the API BASE URL!');
            }
        };
    } catch (error) {
        // Add custom logic to handle errors
        console.log(error);
    }
};

export const addBookmark = book => dispatch => {
  dispatch({
    type: ADD_TO_BOOKMARK_LIST,
    payload: book
  });
};

export const removeBookmark = book => dispatch => {
  dispatch({
    type: REMOVE_FROM_BOOKMARK_LIST,
    payload: book
  });
};
