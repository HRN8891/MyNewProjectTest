export const SCREEN_NAMES = {
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  Dashboard: 'Dashboard',
} as const;

export type screenNames = keyof typeof SCREEN_NAMES;
