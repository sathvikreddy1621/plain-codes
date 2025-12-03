async function fetchPrices() {
    try {
        const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("btc-price").innerText = "$" + data.bitcoin.usd.toLocaleString();
        document.getElementById("eth-price").innerText = "$" + data.ethereum.usd.toLocaleString();
        document.getElementById("doge-price").innerText = "$" + data.dogecoin.usd;
    } catch (err) {
        console.log("Error loading prices", err);
    }
}

fetchPrices();
setInterval(fetchPrices, 30000);
