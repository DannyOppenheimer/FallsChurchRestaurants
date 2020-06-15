'use strict';

async function loadTable() {
    let master_list = document.getElementById('master_restaurant_list');
    master_list.innerHTML = '';

    // create a new header
    let header_row = document.createElement("TR");
    header_row.className = "header_row";

    let header_name = document.createElement("TD");
    header_name.innerHTML = "Restaurant";
    header_row.appendChild(header_name);

    let header_address = document.createElement("TD");
    header_address.innerHTML = "Address"
    header_row.appendChild(header_address);

    let header_website = document.createElement("TD");
    header_website.innerHTML = "Website"
    header_row.appendChild(header_website);

    let header_order = document.createElement("TD");
    header_order.innerHTML = "Easy Order"
    header_row.appendChild(header_order);
}