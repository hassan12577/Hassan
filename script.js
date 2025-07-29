const tbody = document.querySelector('#invoiceTable tbody');
const totalDiv = document.getElementById('total');
let totalAmount = 0;

function addItem() {
  const name = document.getElementById('productName').value.trim();
  const qty = parseInt(document.getElementById('quantity').value);
  const price = parseFloat(document.getElementById('price').value);

  // تصحيح شرط التحقق من صحة البيانات
  if (!name || isNaN(qty) || qty <= 0 || isNaN(price) || price < 0) {
    alert('يرجى إدخال بيانات صحيحة للمنتج والكمية والسعر.');
    return;
  }

  const itemTotal = qty * price;
  totalAmount += itemTotal;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${qty}</td>
    <td>${price.toFixed(2)}</td>
    <td>${itemTotal.toFixed(2)}</td>
    `
  ;
  tbody.appendChild(row);

  // تصحيح تحديث نص الإجمالي الكلي
  totalDiv.textContent = `الإجمالي الكلي: ${totalAmount.toFixed(2)}`;

  document.getElementById('productName').value = '';
  document.getElementById('quantity').value = '';
  document.getElementById('price').value = '';
  document.getElementById('productName').focus();}
