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

export type Plan = {
  id: number;
  date: string;
  title: string;
  description: string;
};
