import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        // make api requests to sign up with that email and password
        try {
            const response = await trackerApi.post('/signup', {email,password});
            console.log(response.data);
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
        }

        // if we sign up, modify our state, and say that we are authenticated

        // if sigin up fails, we probably need to reflect an error message
        // somewhere
    };
};

const signin = (dispatch) => {
    return ({email,password}) => {
        // Try to signin
        // Handle success by updating state
        // Handle failure by showing error message (somehow)
    };
};

const signout = (dispatch) => {
    return () => {
        // somehow sig out!!!
    };
};

export const {Provider, Context} = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false, errorMessage: '' }
);
