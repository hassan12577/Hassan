
function addRow() {
  const table = document.getElementById("items");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><input type="text" class="item-name" /></td>
    <td><input type="number" class="item-qty" value="1" min="0" /></td>
    <td><input type="number" class="item-price" value="0" min="0" /></td>
    <td class="item-total">0</td>
    <td><button class="delete-btn">✖</button></td>
    `
  ;

  table.appendChild(row);
  attachRowEvents(row);
}

function attachRowEvents(row) {
  const qty = row.querySelector(".item-qty");
  const price = row.querySelector(".item-price");
  const deleteBtn = row.querySelector(".delete-btn");

  qty.addEventListener("input", updateTotals);
  price.addEventListener("input", updateTotals);

  deleteBtn.addEventListener("click", () => {
    row.remove();
    updateTotals();
  });
}

function updateTotals() {
  let grandTotal = 0;
  const rows = document.querySelectorAll("#items tr");

  rows.forEach((row) => {
    const qtyInput = row.querySelector(".item-qty");
    const priceInput = row.querySelector(".item-price");
    const totalCell = row.querySelector(".item-total");

    const qty = parseFloat(qtyInput.value) || 0;
    const price = parseFloat(priceInput.value) || 0;
    const total = qty * price;

    totalCell.textContent = total.toFixed(2);
    grandTotal += total;
  });

  document.getElementById("grand-total").textContent = grandTotal.toFixed(2);
}