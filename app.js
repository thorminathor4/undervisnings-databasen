import express from "express";
import path from "path";

const app = express();
app.use(express.static("./Public"));

app.get("/", (req, res) => res.sendFile(path.resolve("./Public/forside.html")));
app.get("/search", (req, res) => res.sendFile(path.resolve("./Public/søgning.html")));
app.get("/news", (req, res) => res.sendFile(path.resolve("./Public/nyheder.html")));
app.get("/toplists", (req, res) => res.sendFile(path.resolve(`./Public/toplister.html`)));
app.get("/toplists/list/:name", (req, res) => {
    res.sendFile(path.resolve(`./Public/toplister/${req.params.name}.html`));
});
app.get("/help", (req, res) => res.sendFile(path.resolve("./Public/hjælp.html")));
app.get("/about", (req, res) => res.sendFile(path.resolve("./Public/om.html")));

app.listen(4000 || process.env.PORT);