import app from './app';
import { sequelize } from './database/database';

async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(3001, () => {
      console.log('listening on', 3001);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
