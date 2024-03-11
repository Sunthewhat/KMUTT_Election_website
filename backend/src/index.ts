import { Hono } from 'hono';
import { logger } from 'hono/logger';
import eligibleRoute from './routes/eligible';
import candidateRoute from './routes/candidate'
import partyRoute from './routes/party';
import electionRoute from './routes/election';

const app = new Hono();

app.use(logger());

app.get('/', (c) => {
	return c.text('Hello Hono!');
});

app.route("/auth", eligibleRoute);
app.route("/candidate", candidateRoute);
app.route("/eligible", eligibleRoute);
app.route("/party", partyRoute);
app.route("/election", electionRoute)



export default {
	port: 8000,
	fetch: app.fetch,
};
