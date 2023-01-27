import app from './app';
import { sequelize } from './database/database';

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(process.env.DB_PORT, () => {
      console.log('listening on', process.env.DB_PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
