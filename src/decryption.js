// Import required modules
const crypto = require('crypto');

// Define default decryption algorithm and options
const DEFAULT_ALGORITHM = 'aes-256-cbc';
const DEFAULT_OPTIONS = {
  algorithm: DEFAULT_ALGORITHM,
  digest: 'sha256',
  keylen: 32
};

function cl_decrypt(encryptedMessage, encryptionKey, algorithm = DEFAULT_ALGORITHM, options = DEFAULT_OPTIONS) {
  try {
    const decipher = crypto.createDecipheriv(algorithm, encryptionKey);
    let decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf8');
    decryptedMessage += decipher.final('utf8');
    return decryptedMessage;
  } catch (error) {
    console.error('Error decrypting message:', error);
    return null;
  }
}

// Export the decryption function
module.exports = cl_decrypt;
