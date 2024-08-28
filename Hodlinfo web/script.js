
fetch('https://api.wazirx.com/api/v2/tickers')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });