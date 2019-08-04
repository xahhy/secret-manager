const { encrypt, decrypt } = require('../src');

describe('secret manager', () => {
  it('should decrypt with encrypted data', () => {
    const text = '123';
    const encrypted = encrypt(text);
    const { iv, encryptedData } = encrypted;
    const decrypted = decrypt(encrypted);

    expect(decrypted).toBe(text);
  });
});
