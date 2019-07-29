var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("/github", function(req, res) {
    res.status(301).redirect("https://github.com/tien1020/FriendFinder")
  });
  
}