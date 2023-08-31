export type IUserData = {
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type IUserApiResponse = Omit<IUserData, 'fullName'>;

export interface IAuthState {
  userData: IUserData;
}
