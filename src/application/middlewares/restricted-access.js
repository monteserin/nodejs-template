import jwt from "jsonwebtoken";
export const getHeader = (req, header) => req.headers[header];

const secret = "SECRET";

export const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) =>
      err || !decoded
        ? reject(err)
        : resolve({ ...decoded, id: decoded.sub || decoded.id })
    );
  });

export default async (req, res, next) => {
  const token = getHeader(req, "authorization");

  if (!token) {
    return res.status(400).send("No token provided.");
  }

  try {
    const decodedToken = await verifyToken(token);
    const id = decodedToken.data?.id;
    if (!id) {
      return res.status(403).send("Wrong credentials");
    }
    req.userId = id;
    return next();
  } catch {
    return res.status(401).send("Failed to authenticate token.");
  }
};
