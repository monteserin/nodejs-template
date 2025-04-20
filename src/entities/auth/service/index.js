import UserModel from "../../user/model";
import jwt from "jsonwebtoken";

const AuthService = () => ({
  async signUp(email, password) {
    const user = await UserModel.create({ email, password });
    return user;
  },
  async signIn(email, password) {
    const user = await UserModel.findOne({ where: { email, password } });
    if (!user) return null;

    const tokenPayload = { id: user.id, email };

    const token = jwt.sign(
      {
        data: tokenPayload,
      },
      "SECRET",
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      {
        data: tokenPayload,
      },
      "SECRET",
      { expiresIn: "1h" }
    );

    return {
      user,
      token,
      refreshToken,
    };
  },

  deleteUser(userProviderId) {
    return ManagementClient.deleteUser({ id: userProviderId });
  },
});

const decodeBase64Token = (token) => {
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const [username, password] = decoded.split(":");
    return { username, password };
  } catch (err) {
    return null;
  }
};

export default AuthService;
