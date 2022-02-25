import {
    cleanEnv, str,
} from 'envalid';

function validateEnv() {
    cleanEnv(process.env, {
        GOOGLE_BOOKS_ENDPOINT: str(),
        GOOGLE_BOOKS_API_KEY: str()
    });
}

export default validateEnv;