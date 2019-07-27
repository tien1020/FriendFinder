var surveyData = require("../data/friends");
module.exports = function(app){
    app.get("/api/survey",function(req, res) {
        res.json(surveyData);
      });
}
app.post("/api/survey", function(req, res) {
    surveyData.push(req.body);
    res.json();
});