const { PrivateKey } = require('@wharfkit/session')
const readline = require('readline')

/**
 * Derives a public key from a private key string
 * @param {string} privateKeyString - The private key string (e.g., "PVT_K1_...")
 * @returns {string} The derived public key string
 * @throws {Error} If the private key is invalid
 */
function derivePublicKey(privateKeyString) {
    try {
        // Create PrivateKey instance from string
        const privateKey = PrivateKey.fromString(privateKeyString)
        
        // Derive public key
        const publicKey = privateKey.toPublic()
        
        return publicKey.toString()
    } catch (error) {
        throw new Error(`Failed to derive public key: ${error.message}`)
    }
}

/**
 * Prompts user for private key input and derives public key
 */
async function promptForPrivateKey() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise((resolve) => {
        rl.question('Enter your private key (or "exit" to quit): ', async (input) => {
            rl.close()
            
            if (input.toLowerCase() === 'exit') {
                console.log('👋 Goodbye!')
                process.exit(0)
            }
            
            if (!input.trim()) {
                console.log('❌ Please enter a valid private key.\n')
                resolve(false)
                return
            }
            
            try {
                console.log('\n🔑 Deriving public key...')
                const publicKey = derivePublicKey(input.trim())
                
                console.log('✅ Success!')
                console.log('Private Key:', input.trim())
                console.log('Public Key: ', publicKey)
                console.log('─'.repeat(60))
                
            } catch (error) {
                console.log('❌ Error:', error.message)
                console.log('─'.repeat(60))
            }
            
            resolve(true)
        })
    })
}

/**
 * Main interactive function
 */
async function main() {
    console.log('🔐 Private Key to Public Key Deriver')
    console.log('═'.repeat(40))
    console.log('Enter a private key to derive its public key')
    console.log('Type "exit" to quit\n')
    
    while (true) {
        await promptForPrivateKey()
    }
}

// Export the function for use in other modules
module.exports = { derivePublicKey }

// Run main function if this script is executed directly
if (require.main === module) {
    main()
}
