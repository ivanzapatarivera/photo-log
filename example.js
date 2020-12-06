const mongoURI =
  "mongodb+srv://caman3874:qwertyuiopaman1234@@amanco-pexfz.mongodb.net/test?retryWrites=true&w=majority";

const conn = mongoose.createConnection(mongoURI, { useNewUrlParser: true });

let gfs;

conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
  console.log("connection made successfully");
});

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
