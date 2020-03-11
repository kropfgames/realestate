/**
 * These are the admin routes for users
 */

module.exports = function(app) {
  app.get("/user", (req, res) => {
    res.send("This will send a user");
  });

  app.post("/user", (req, res) => {
    res.send("This will create a user");
  });

  app.put("/user", (req, res) => {
    res.send("This will update a user");
  });

  app.delete("/user", (req, res) => {
    res.send("This will delete a user");
  });
};
