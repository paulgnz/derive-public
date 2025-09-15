const { derivePublicKey } = require('./index.js')

/**
 * Test function to validate the derivePublicKey function
 */
function runTests() {
    console.log("🧪 Running tests...\n")
    
    // Test cases
    const testCases = [
        {
            name: "Valid private key (example)",
            privateKey: "PVT_K1_CJvUF9g6j9BssodzrPqHgU14dpdi5ojTefcjEeaRtQefTTkV8",
            shouldPass: true
        },
        {
            name: "Invalid private key format",
            privateKey: "invalid_key_format",
            shouldPass: false
        },
        {
            name: "Empty string",
            privateKey: "",
            shouldPass: false
        },
        {
            name: "Null input",
            privateKey: null,
            shouldPass: false
        }
    ]
    
    let passedTests = 0
    let totalTests = testCases.length
    
    testCases.forEach((testCase, index) => {
        console.log(`Test ${index + 1}: ${testCase.name}`)
        console.log(`Input: ${testCase.privateKey}`)
        
        try {
            const result = derivePublicKey(testCase.privateKey)
            
            if (testCase.shouldPass) {
                console.log(`✅ PASS - Public Key: ${result}`)
                passedTests++
            } else {
                console.log(`❌ FAIL - Expected error but got result: ${result}`)
            }
        } catch (error) {
            if (!testCase.shouldPass) {
                console.log(`✅ PASS - Expected error: ${error.message}`)
                passedTests++
            } else {
                console.log(`❌ FAIL - Unexpected error: ${error.message}`)
            }
        }
        
        console.log("") // Empty line for readability
    })
    
    console.log(`\n📊 Test Results: ${passedTests}/${totalTests} tests passed`)
    
    if (passedTests === totalTests) {
        console.log("🎉 All tests passed!")
    } else {
        console.log("⚠️  Some tests failed!")
        process.exit(1)
    }
}

// Run tests if this script is executed directly
if (require.main === module) {
    runTests()
}
