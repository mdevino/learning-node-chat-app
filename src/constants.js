const path = require('path');

const PORT = process.env.PORT;
const ROOT_DIR = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

module.exports = {
    PORT,
    ROOT_DIR,
    PUBLIC_DIR
}