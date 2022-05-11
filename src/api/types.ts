export type NewUserType = {
  email: string;
  password: string;
};

export type UpdateUserType = {
  name: string;
  avatar: string;
};

export type ResponseCardType = {
  cardsPack_id: string;
  question: string;
  answer: string;
}