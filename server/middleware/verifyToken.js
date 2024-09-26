import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next  ) => {
  // Check if token exists in cookies
  const token = req.cookies.token;

  if(!token) return res.status(401).json({message: "Not Authenticated"});

  //Verify token
  jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, payload) => {
    if(err) return res.status(403).json({message: "Token is not Valid!"})

    req.userId = payload.id; // Pass down user id with req

    // Run next process
    next();
  })
}