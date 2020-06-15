
window.addEventListener('load', () => {
    
    loadTable();
});

function loadTable() {
    let master_list = document.getElementById('master_restaurant_list');
    master_list.innerHTML = '';

	// create a new header
	let header_row = master_list.insertRow(0);
    header_row.className = 'header_row';

	let header_name = header_row.insertCell(0)
	header_name.innerHTML = 'Restaurant';

	let header_address = header_row.insertCell(0)
	header_address.innerHTML = 'Address';

	let header_website = header_row.insertCell(0)
	header_website.innerHTML = 'Website';

	let header_order = header_row.insertCell(0)
    header_order.innerHTML = 'Easy Order';
    
    // add each new row
}
