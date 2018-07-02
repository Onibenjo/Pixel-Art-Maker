// Select color input
// Select size input
	//Get the value of the row

const row = $("#inputHeight");

	//Get the value of the column
const cell = $("#inputWeight");
	//Getting the table
const table = $("#pixelCanvas");
// When size is submitted by the user, call makeGrid()
const picker = $('#sizePicker');
const color = $("#colorPicker");

document.getElementById("subm").addEventListener("click", function(event){
	event.preventDefault();
    $('tr').remove();
	makeGrid();
});



function makeGrid() {
	//Loop through the rows to create the grid
	for (let r = 0; r < row.val(); r++){
		const table = $('#pixelCanvas');
		//Append a table row and column to the table element
		const tr = $('<tr></tr>');

		//Loop through the column to create the grid
		for (let c = 0; c < cell.val(); c++){
			//Append to the table row element
			tr.append('<td></td>');
			
		}
		table.append(tr);
	}
	return table;

}

$('table').on('click', "td", function() {
 // $( this ).toggleClass("color");
  $(this).css('background-color', color.val())
});