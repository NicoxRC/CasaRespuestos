import app from './app';

async function main() {
  try {
    app.listen(3001, () => {
      console.log('listening on', 3001);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
