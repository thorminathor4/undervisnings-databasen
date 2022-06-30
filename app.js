import express from "express";
import path from "path";

const app = express();
app.use(express.static("./public"));

app.get("/", (req, res) => res.sendFile(path.resolve("./public/frontpage.html")));
app.get("/search", (req, res) => res.sendFile(path.resolve("./public/search.html")));
app.get("/news", (req, res) => res.sendFile(path.resolve("./public/news.html")));
app.get("/toplists", (req, res) => res.sendFile(path.resolve(`./public/toplists.html`)));
app.get("/toplist/:name", (req, res) => {
    res.sendFile(path.resolve(`./public/toplists/${req.params.name}.html`));
});
app.get("/help", (req, res) => res.sendFile(path.resolve("./public/help.html")));
app.get("/about", (req, res) => res.sendFile(path.resolve("./public/about.html")));

app.listen(process.env.PORT || 4000);