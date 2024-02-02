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

async function solveSudoku(){
    const gridSize = 0;
    const sudokuArray = [];

    //filling the sudokuArray
    for(let row=0;row<gridSize;row++){
        sudokuArray[row] = [];
        for(let col=0;col<gridSize;col++){
            const cellId = `cell-${row}-${col}`;
            const cellValue = document.getElementById(cellId).ariaValueMax;
            sudokuArray[row][col] = cellValue !== ""? parseInt(cellValue) : 0;
        }
    }

    // Identifying user-input cells and mark them
    for(let row=0;row<gridSize;row++){
        for(let col=0;col<gridSize;col++){
            const cellId = `cell-${row}-${col}`;
            const cell = document.getElementById(cellId);
            if(sudoku[row][col] != 0){
                cell.classList.add("user-input");
            }
        }
    }

    //solve the sudoku and display the solution

    if(solveSudokuHelper(sudokuArray)){
        for(let row=0;row<gridSize;row++){
            for(let col=0;col<gridSize;col++){
                const cellId = `cell-${row}-${col}`;
                const cell = document.getElementById(cellId);

                // fill in the solved values and apply animation
                if(!cell.classList.contains("user-input")){
                    cell.value = sudokuArray[row][col];
                    cell.classList.add("solved");
                    await sleep(20); //adding delay for visulization
                }
            }
        }
    }
    else{
        alert("No solution exists for the given sudoku puzzle...")
    }
}
