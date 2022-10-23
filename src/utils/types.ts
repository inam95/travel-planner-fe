export type RegisterUserParams = {
  username: string;
  password: string;
};

export type LoginUserParams = {
  username: string;
  password: string;
};

export type User = {
  id: number;
  username: string;
};
