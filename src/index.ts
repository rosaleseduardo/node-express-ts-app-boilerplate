import app from './app';
import { successOutput } from './utils';

// ==================  Express Server - Exposed on port  ==================== */
app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `${successOutput(
      `Connected successfully on port ${process.env.SERVER_PORT ?? 3000}`,
    )}`,
  );
});
