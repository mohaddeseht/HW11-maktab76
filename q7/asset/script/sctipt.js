function createTable(arr) {
    const table = document.createElement('table');
    // setting table headers
    let row = table.insertRow(0);
    let cells = Object.keys(arr[0]);
    cells.forEach((cell, i) => {
        row.insertCell(i).innerHTML = cell;
    })
    // setting table data
    for (i = 0; i < arr.length; i++) {
        let value = Object.values(arr[i]);
        row = table.insertRow(i + 1);
        value.forEach((val, i) => {
            row.insertCell(i).innerHTML = val;
        })
    }
    document.body.append(table);
    // changing the color
    const age = document.querySelectorAll('tr :nth-child(2)');
    const trs = document.querySelectorAll('tr');
    age.forEach((num, i) => {
        if (num.textContent < 10) {
            trs[i].style.backgroundColor = "yellow";
        } else if (num.textContent >= 10 && num.textContent < 40) {
            trs[i].style.backgroundColor = "limegreen";
        } else if (num.textContent >= 40 && num.textContent < 80) {
            trs[i].style.backgroundColor = "red";
        }
        else if (num.textContent >= 80) {
            trs[i].style.backgroundColor = "blue";
        }
    })
}

input = [
    { name: 'James', age: 9, country: 'United States' },
    { name: 'Rony', age: 31, country: 'United Kingdom' },
    { name: 'Peter', age: 58, country: 'Canada' },
    { name: 'Marks', age: 20, country: 'Spain' }
];
createTable(input);


