import { Hono } from 'hono';
import { logger } from 'hono/logger';
import eligibleRoute from './routes/eligible';

const app = new Hono();

app.use(logger());

app.get('/', (c) => {
	return c.text('Hello Hono!');
});

app.route("/eligible", eligibleRoute);

export default {
	port: 8000,
	fetch: app.fetch,
};
