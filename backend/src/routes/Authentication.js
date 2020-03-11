/**
 * These are the user authentication routes
 */

module.exports = function(app) {
  app.post("/user/register", (req, res) => {
    res.send("This will register a user");
  });

  app.post("/user/login", (req, res) => {
    res.send("This will login a user");
  });

  app.post("/user/logout", (req, res) => {
    res.send("This will logout a user");
  });

  app.post("/user/forgot", (req, res) => {
    res.send("This will send a forgotten password email");
  });

  app.post("/user/reset", (req, res) => {
    res.send("This will reset a user's password with the correct token");
  });
};
