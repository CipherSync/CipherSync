// Import required modules
const encryption = require('./encrypt/encryption');
const decryption = require('./decrypt/decryption');

// Index Class
class cipherSync {
    encrypt(string, key) {
        try {
            if (typeof string !=='string' || typeof key !== 'string') {
                throw new error('Invalid argument. String and Key value must be a string.');
            }
            if (string === '' || key === '') {
                throw new error('Empty arguments are not allowed. Key and String value must be non-empty strings.');
            }
            return encryption(string, key);
        } catch (error) {
            console.error(`CipherSync: An error occurred in encryption: ${error}`);
            return null;
        }
    }

    decrypt(encryptedMessage, key) {
        try {
            if (typeof encryptedMessage !== 'string' || typeof key !== 'string') {
                throw new error('Invalid argument type. Both encryptedMessage and key must be strings.');
            }
            if (encryptedMessage === '' || key === '') {
                throw new error('Empty arguments are not allowed. Both encryptedMessage and key must be non-empty strings.');
            }
            if (encryptedMessage.length !== 64) {
                throw new error('Invalid encryptedMessage length. The encryptedMessage must be 256-bits in length.');
            }
            return decryption(encryptedMessage, key);
        } catch (error) {
            console.error(`CipherSync: An error occurred in decryption: ${error}`);
        }
    }
}

// Returning Module
module.exports = cipherSync;
