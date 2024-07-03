const logOut = async (_: any, { id }: { id: string }): Promise<string> =>
  `User with ID ${id} logged out`;
const signIn = async (
  _: any,
  { email, password }: { email: string; password: string }
): Promise<string> => {
  return `User signed in with email ${email}`;
};
const signUp = async (
  _: any,
  { email, name, password }: { email: string; name: string; password: string }
): Promise<string> => {
  return `User signed up with email ${email}, name ${name}`;
};

export { logOut, signIn, signUp };
