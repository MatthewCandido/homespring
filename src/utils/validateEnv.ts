import {
    cleanEnv, str,
} from 'envalid';

function validateEnv() {
    cleanEnv(process.env, {
        GOOGLE_BOOKS_ENDPOINT: str()
    });
}

export default validateEnv;