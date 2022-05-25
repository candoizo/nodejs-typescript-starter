import 'dotenv/config';
import debug from 'debug';

const log = debug(`*`);

const main = async () => {
	log(process.env);
};

main();
