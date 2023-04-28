// Import required modules
const crypto = require('crypto');

// Define default encryption algorithm and options
const DEFAULT_ALGORITHM = 'aes-256-cbc';
const DEFAULT_OPTIONS = {
  algorithm: DEFAULT_ALGORITHM,
  digest: 'sha256',
  keylen: 32
};

function cl_encrypt(string, encryptionKey, algorithm = DEFAULT_ALGORITHM, options = DEFAULT_OPTIONS) {
  try {
    const cipher = crypto.createCipheriv(algorithm, encryptionKey, null);
    let encryptedMessage = cipher.update(string, 'utf8', 'hex');
    encryptedMessage += cipher.final('hex');
    return encryptedMessage;
  } catch (error) {
    console.error('Error encrypting message:', error);
    return null;
  }
}

// Export the encryption function
module.exports = cl_encrypt;
