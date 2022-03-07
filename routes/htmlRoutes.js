// path
const path = require("path");

// export notes and index.html
module.exports = function (app) {
    // API Routes
    app.get("/api/notes", function (req, res) {
        res.json(getNotes());
    });

    // API Routes
    app.post("/api/notes", function (req, res) {
        addNote(req.body);
        res.json(getNotes());
    });

    // API Routes
    app.delete("/api/notes/:id", function (req, res) {
        deleteNote(req.params.id);
        res.json(getNotes());
    });

    // HTML Routes
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}
