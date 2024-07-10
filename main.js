const app = require("express");

const PORT = 3000;

app.use("/user", (req, res) => {
  res.json({
    id: 1,
    user: "Alexis",
  });
});

app.listener(PORT, () => {
  console.log(`Aplicacion corriendo en http://localhost:${PORT}`);
});
