import { Auth } from "aws-amplify";

const signIn = async (email, password, name) => {
  try {
    const response = await Auth.signIn(email, password);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const signUp = async (username, password, name) => {
  try {
    const response = await Auth.signUp({
      username,
      password,
      attributes: {
        name,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const confirmSignUp = async (email, code) => {
  try {
    const response = await Auth.confirmSignUp(email, code, {
      forceAliasCreation: true,
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const signOut = async () => {
  try {
    const response = await Auth.signOut();
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const checkAuth = async () => {
  try {
    const response = await Auth.currentAuthenticatedUser();
    const { attributes, signInUserSession } = response;
    return { attributes, jwtToken: signInUserSession.accessToken.jwtToken };
  } catch (error) {
    throw new Error(error.message);
  }
};

const resendConfirmationCode = async () => {
  try {
    const response = await Auth.resendSignUp(username);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export {
  signIn,
  signOut,
  checkAuth,
  signUp,
  confirmSignUp,
  resendConfirmationCode,
};
