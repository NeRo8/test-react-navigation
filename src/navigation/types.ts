export type AuthStackNavigation = {
  Auth: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type MainTabNavigation = {
  HomeStack: HomeStackNavigation;
  ProfileStack: ProfileStackNavigation;
};

export type HomeStackNavigation = {
  Home: undefined;
  Detail: {
    itemId: number;
  };
};

export type ProfileStackNavigation = {
  Profile: undefined;
  Detail: {
    userId: undefined;
  };
};
