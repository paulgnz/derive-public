# Private Key to Public Key Converter

A simple tool that converts private keys to public keys. Perfect for beginners who have never run a script before!

## 🚀 For Complete Beginners

### What This Does
This tool takes your private key (like `PVT_K1_...`) and converts it to a public key (like `PUB_K1_...`). It's completely safe and runs on your own computer.

### What You Need
- A computer (Windows or Mac)
- Internet connection (for first-time setup)
- About 5 minutes

---

## 📋 Step-by-Step Instructions

### Step 1: Install Node.js (Required)

**For Windows Users:**
1. Go to https://nodejs.org/
2. Click the big green "LTS" button (it says "Recommended for most users")
3. Download the file (it will be something like `node-v18.x.x-x64.msi`)
4. Double-click the downloaded file
5. Follow the installation wizard (just click "Next" on everything)
6. Restart your computer when it's done

**For Mac Users:**
1. Go to https://nodejs.org/
2. Click the big green "LTS" button
3. Download the file (it will be something like `node-v18.x.x.pkg`)
4. Double-click the downloaded file
5. Follow the installation wizard (just click "Continue" on everything)
6. You might need to enter your Mac password

### Step 2: Download This Tool

1. Click the green "Code" button on this page
2. Click "Download ZIP"
3. Extract the ZIP file to your Desktop (or anywhere you want)
4. You should now have a folder called `derive-public`

### Step 3: Run the Tool

**For Windows Users:**
1. Open the `derive-public` folder
2. Right-click in the empty space and select "Open in Terminal" or "Open in Command Prompt"
3. Type: `npm install` and press Enter (wait for it to finish)
4. Type: `npm start` and press Enter
5. Follow the instructions on screen

**For Mac Users:**
1. Open the `derive-public` folder
2. Right-click in the empty space and select "Open in Terminal"
3. Type: `npm install` and press Enter (wait for it to finish)
4. Type: `npm start` and press Enter
5. Follow the instructions on screen

### Step 4: Use the Tool

1. When prompted, type or paste your private key
2. Press Enter
3. Your public key will appear!
4. Type "exit" to quit

---

## 🛠️ What If Something Goes Wrong?

### "node is not recognized" or "command not found" Error
- **Windows:** Restart your computer after installing Node.js
- **Mac:** Open a new Terminal window and try again
- Make sure you installed Node.js from https://nodejs.org/ (not from another source)

### "npm is not recognized" Error
- Same as above - restart your computer (Windows) or open new Terminal (Mac)
- Make sure Node.js installation completed successfully

### "Permission denied" Error (Mac)
- This usually means Node.js isn't installed properly
- Reinstall Node.js from https://nodejs.org/

### "Failed to install packages" Error
- Check your internet connection
- Try running `npm install` again
- Make sure you're in the right folder (the one with package.json)

### Nothing happens when I type commands
- Make sure you're in the right folder (should contain package.json file)
- Try typing `dir` (Windows) or `ls` (Mac) to see the files
- Make sure you downloaded and extracted the ZIP file correctly

---

## 🔧 For Developers

### Programmatic Usage
```javascript
const { derivePublicKey } = require('./index.js')

try {
    const publicKey = derivePublicKey("PVT_K1_your_private_key_here")
    console.log("Public Key:", publicKey)
} catch (error) {
    console.error("Error:", error.message)
}
```

### Testing
```bash
npm test
```

## API

### `derivePublicKey(privateKeyString)`

Derives a public key from a private key string.

**Parameters:**
- `privateKeyString` (string): The private key string (e.g., "PVT_K1_...")

**Returns:**
- `string`: The derived public key string

**Throws:**
- `Error`: If the private key is invalid or malformed

## Example

```javascript
const { PrivateKey } = require('@wharfkit/session')

// Example private key (dummy only)
const privateKey = PrivateKey.fromString("PVT_K1_CJvUF9g6j9BssodzrPqHgU14dpdi5ojTefcjEeaRtQefTTkV8")

const publicKey = privateKey.toPublic()
console.log("Public Key: ", publicKey.toString())
```

## Security Note

⚠️ **Never share your private keys with anyone!** This tool runs on your own computer and doesn't send your keys anywhere.

## Need Help?

If you're still stuck:
1. Make sure Node.js is installed correctly
2. Try restarting your computer
3. Ask someone who knows about computers to help you
4. Check that you downloaded all the files correctly