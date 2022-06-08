function getAdd() {
    const input1 = parseInt(document.getElementById('val1').value);
    const input2 = parseInt(document.getElementById('val2').value);
    const result = document.getElementById('result');
    const sum = input1 + input2;
    if (sum % 2 === 0) {
        result.innerHTML = 'Even';
        result.style.color = 'blue';
    }
    else {
        result.innerHTML = 'odd';
        result.style.color = 'red';
    }
}
