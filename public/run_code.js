

function runCode() {
    try {
        const code = document.getElementById("codeInput").value;
        let output = '';
        
        // Capture console.logs
        const originalLog = console.log;
        console.log = function(message) {
            output += message + '<br>';
        };
        
        eval(code);
        
        // Restore console.log
        console.log = originalLog;
        
        document.getElementById("output").innerHTML = output;
    } catch (error) {
        document.getElementById("output").innerHTML = `Error: ${error.message}`;
    }
}
