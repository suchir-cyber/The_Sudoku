document.addEventListener("DOMContentLoaded", function(){
    const gridSize = 9;
    const solveButton = document.getElementById("solve-btn");
    solveButton.addEventListener('click', solveSudoku);

    const sudokugrid = document.getElementById('sudoku-grid');
    // creating the sudoku grid by input cells
    for(let row=0;row<gridSize;row++){
        const newRow = document.createElement('tr');
        for(let col=0;col<gridSize;col++){
            const cell = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'cell';
            input.id = `cell-${row}-${col}`;
            cell.appendChild(input);
            newRow.appendChild(cell);
        }
        sudokugrid.appendChild(newRow);
    }
});