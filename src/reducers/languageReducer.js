// filler file to help Github confirm file structures

import { 
    EDIT_CLASS, 
    FETCH_START, 
    FETCH_SUCCESS, 
    FETCH_FAIL,
    ADD_LANG, 
     } from '../actions/Actions';
import { CREATE_LANG, DELETE_LANG, EDIT_LANG } from '../actions/LanguageActions';
    
    const initialState = {
        language: {
            languageid:0,
            language:''
          },
        languages: [],
        isFetching: false,
        error: ''
      
    };
    
    export const reducer = (state = initialState, action) => {
      switch (action.type) {
        case(FETCH_START):
          return({
            ...state,
            isFetching: true
          })
        case(FETCH_SUCCESS):
          return({
            ...state,
            languages: action.payload,
            isFetching: false
          })
        case(FETCH_FAIL):
          return({
            ...state,
            error: action.payload,
            isFetching: false
          })
        case(UPDATE_LANG):
            return({
            ...state,
            languages: action.payload
        })
        case(EDIT_LANG):
          const editLang = state.item.find((c) => c.languageid === action.payload);
          return({
            ...state,
            languages: editLang,
          })
        case(DELETE_LANG):
          const deleteLang = state.language.filter(c=>(action.payload !== c.languageid))
          return({
            ...state,
            languages: deleteLang,
          })
        case(ADD_LANG):
          return({
            ...state,
            languages: [...state.language, action.payload]
          })
        case(CREATE_LANG):
          return({
            ...state,
            languages: action.payload
          })
        default:
          return state;
      }
    };