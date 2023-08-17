fetch("./storage.json")
    .then(response => response.json())
    .then(stock => {
        stock.forEach(item => {
            console.log(item.name)
        });
        let totalProductsDiv = document.getElementById('totalStock');
        totalProductsDiv.innerHTML = totalStock(stock);

        let lowStockDiv = document.getElementById('lowStock');
        lowStockDiv.innerHTML = lowStock(stock);

        let highestPriceDiv = document.getElementById('highestPrice');
        highestPriceDiv.innerHTML = highestPrice(stock);
    });
    function totalStock(stock) {
        console.log(`There are a total of ${stock.length} items.`);
        return `There are a total of ${stock.length} items.`;
    }

    function lowStock(stock) {
        let restock= 0;
        stock.forEach(item => {
            if (parseInt(item.stock) < 6) {
                restock++;
            }
        })
        console.log(`Amount of items that need to be restocked: ${restock}`);
        return `Amount of items that need to be restocked: ${restock}`
        
    }

    function highestPrice(stock) {
        let maxPrice = 0
        for (let i = 0; i < stock.length; i++) {
            if (parseFloat(stock[i].price) > maxPrice) {
                maxPrice = parseFloat(stock[i].price);
            }
        }
        console.log(`The Highest cost for an item is: \$${maxPrice}`);
        return `The Highest cost for an item is: \$${maxPrice}`
    }

