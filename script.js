
    const items = {
      // Motors
      motor1: { price: 50, image: 'images/motor1.jpg' },
      motor2: { price: 70, image: 'images/motor2.jpg' },
      motor3: { price: 90, image: 'images/motor3.jpg' },
      // Drivers
      driver1: { price: 30, image: 'images/driver1.jpg' },
      driver2: { price: 45, image: 'images/driver2.jpg' },
      driver3: { price: 60, image: 'images/driver3.jpg' }
    };

    const table = document.getElementById('itemTable');
    const grandTotalCell = document.getElementById('grandTotal');

    // Initialize each row
    document.querySelectorAll('tbody tr').forEach(row => {
      const select = row.querySelector('.item-select');
      const photo = row.querySelector('.item-photo');
      const priceCell = row.querySelector('.item-price');
      const totalCell = row.querySelector('.item-total');
      const qtyInput = row.querySelector('.qty-input');
      const upBtn = row.querySelector('.qty-up');
      const downBtn = row.querySelector('.qty-down');

      let currentPrice = 0;

      select.addEventListener('change', () => {
        const selected = select.value;
        if (items[selected]) {
          currentPrice = items[selected].price;
          photo.src = items[selected].image;
          priceCell.textContent = `$${currentPrice}`;
        } else {
          currentPrice = 0;
          photo.src = '';
          priceCell.textContent = `$0`;
        }
        updateTotal();
      });

      upBtn.addEventListener('click', () => {
        qtyInput.value = parseInt(qtyInput.value) + 1;
        updateTotal();
      });

      downBtn.addEventListener('click', () => {
        if (qtyInput.value > 0) {
          qtyInput.value = parseInt(qtyInput.value) - 1;
          updateTotal();
        }
      });

      qtyInput.addEventListener('input', updateTotal);

      function updateTotal() {
        const qty = parseInt(qtyInput.value) || 0;
        const total = qty * currentPrice;
        totalCell.textContent = `$${total}`;
        updateGrandTotal();
      }
    });

    function updateGrandTotal() {
      let grandTotal = 0;
      document.querySelectorAll('.item-total').forEach(cell => {
        const value = parseFloat(cell.textContent.replace('$', '')) || 0;
        grandTotal += value;
      });
      grandTotalCell.textContent = `$${grandTotal}`;
    }
 
