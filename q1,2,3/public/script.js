const color = ['bg-white', 'bg-white', 'bg-blue-100', 'bg-gray-200', 'bg-green-100',
    'bg-red-100', 'bg-yellow-100', 'bg-cyan-100', 'bg-gray-100', 'bg-slate-700'];
const trs = document.querySelectorAll('tr');

function rowColor(color) {
    trs.forEach((tr, i) => {
        tr.className = color[i];
    });
    trs[trs.length - 1].classList.add('text-white');
}
rowColor(color);




const removeButton = document.createElement('button');
removeButton.innerHTML = 'Remove';
removeButton.className = 'border-0 py-2 px-4 m-3 bg-red-500 font-bold rounded absolute right-16 top-0';
document.body.prepend(removeButton);


const table = document.querySelector('table');
removeButton.addEventListener('click', () => {
    for (let i = 1; i < 6; i++) {
        table.deleteRow(1);
    }
});



const addButton = document.createElement('button');
addButton.innerHTML = 'add';
addButton.className = 'border-0 py-2 px-8 m-3 bg-green-500 font-bold rounded absolute right-16';
document.body.append(addButton);

addButton.addEventListener('click', () => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <th>new row</th>
    <td>cell</td>
    <td>cell</td>`;
    table.append(row);
})

