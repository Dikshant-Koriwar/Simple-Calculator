function calculate() {
    const expression = document.getElementById('expression').value;

    try {
        const result = eval(expression); // Evaluates the expression
        document.getElementById('result').textContent = `Result: ${result}`;
    } catch (error) {
        document.getElementById('result').textContent = `Invalid expression`;
    }
}
