
            const input = document.querySelector('input');
            const button = document.querySelector('button');
            const unpurchasedList = document.getElementById('unpurchasedList');
            const purchasedList = document.getElementById('purchasedList');

            button.onclick = function() {
                let newItem = input.value;
                input.value = '';

                if (newItem.trim() === '') {
                    alert("Please enter a valid item.");
                    return;
                }

                const itemList = document.createElement('li');
                const itemText = document.createElement('span');
                const purchaseButton = document.createElement('button');

                itemText.textContent = newItem;
                purchaseButton.textContent = 'Purchase';

                purchaseButton.onclick = function() {
                    if (itemList.classList.contains('purchased')) {
                        
                        itemList.classList.remove('purchased');
                        purchaseButton.textContent = 'Purchase';
                        unpurchasedList.appendChild(itemList);
                    } else {
                        
                        itemList.classList.add('purchased');
                        purchaseButton.textContent = 'Unpurchase';
                        purchasedList.appendChild(itemList);
                    }
                };

                itemList.appendChild(itemText);
                itemList.appendChild(purchaseButton);
                unpurchasedList.appendChild(itemList);
                input.focus();
            };
    