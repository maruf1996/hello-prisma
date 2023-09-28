import app from "./app";

const port = process.env.PORT || 5000;

async function main() {
  app.listen(port, () => {
    console.log(`Server Running at ${port}`);
  });
}

main();
