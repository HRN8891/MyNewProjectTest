import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthState, IUserApiResponse, IUserData} from '../types';

export const initialState: IAuthState = {
  userData: {
    fullName: '',
    firstName: '',
    lastName: '',
    email: '',
  },
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUserDetails: {
      reducer: (state, action: PayloadAction<IUserData>) => {
        state.userData = action.payload;
      },
      prepare: (user: IUserApiResponse) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        return {payload: {...user, fullName}};
      },
    },
  },
});

export const {saveUserDetails} = auth.actions;

export default auth.reducer;
