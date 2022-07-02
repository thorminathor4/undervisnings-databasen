import express from "express";
import path from "path";

const app = express();
app.use(express.static("./public"));

app.get("/", (req, res) => res.sendFile(path.resolve("./public/pages/frontpage.html")));
app.get("/search", (req, res) => res.sendFile(path.resolve("./public/pages/search.html")));
app.get("/news", (req, res) => res.sendFile(path.resolve("./public/pages/news.html")));
app.get("/toplists", (req, res) => res.sendFile(path.resolve(`./public/pages/toplists.html`)));
app.get("/toplist/:name", (req, res) => {
    res.sendFile(path.resolve(`./public/pages/toplists/${req.params.name}.html`));
});
app.get("/help", (req, res) => res.sendFile(path.resolve("./public/pages/help.html")));
app.get("/about", (req, res) => res.sendFile(path.resolve("./public/pages/about.html")));

app.listen(process.env.PORT || 4000);