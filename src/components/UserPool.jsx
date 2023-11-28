import { CognitoUserPool } from "amazon-cognito-identity-js";

// const poolData = {
//     UserPoolId: "ap-south-1_WtXocwBLk",
//     ClientId: "721d1ljvn2v19ajdo2is0vfn1h"
// }

const poolData = {
  UserPoolId: "us-east-1_o6vtq70SL",
  ClientId: "623itqbk84tqb8d351otf2qtso",
};

export default new CognitoUserPool(poolData);
