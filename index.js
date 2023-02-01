const express = require("express");
const http = require("http");

const app = express();

const PORT = process.env.PORT;

const server = http.createServer(app);

// work
app.get("/", (req, res) => {
  res.redirect(
    "https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbVFwUTZ3RFFlUVZacEp2ZS02MmJQQ3BKYnFJZ3xBQ3Jtc0ttVkwxUmh4QmVTRjBrZWJlZmdrNDBHSF9wczgtYmZWRzVyQkV5emxpRkZpejBQVUVadFIxYnBLSmpucG9OenM2OXNqei1GamRsazE1MlRpa3ozVnBDeHlOaWZlOEo3UWV2eU9lZk5SQkhJNlhRYUtGOA&q=https%3A%2F%2Fnetlify.app%2F&html_redirect=1"
  );
});
// set server port
server.listen(PORT || 5050);
