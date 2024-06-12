function toggleTable(tableId) {
    var table = document.getElementById(tableId);
    var checkbox = document.getElementById(tableId + 'Checkbox');
    
    if (table.style.display === 'none') {
      table.style.display = 'table';
      checkbox.checked = true;
    } else {
      table.style.display = 'none';
      checkbox.checked = false;
    }
  }
  
  // Hide the table initially when the customer enters the page
  document.addEventListener('DOMContentLoaded', function() {
    var tableId = 'yourTableId'; // Replace 'yourTableId' with the actual ID of your table
    var table = document.getElementById(tableId);
    var checkbox = document.getElementById(tableId + 'Checkbox');
    
    if (table) {
      table.style.display = 'none';
      checkbox.checked = false;
    }
  });