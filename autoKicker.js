var bannedIPs = [];

function fetchBannedIPs() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://docs.google.com/spreadsheets/d/1h6NB73PIjwgWXZwG04pUd6kUdviD5BoyU485USfkL70/export?format=csv', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var csvData = xhr.responseText;
      var rows = csvData.split('\n');
      bannedIPs = rows.map(function (row) {
        return row.split(',')[0].trim();
      });
      console.log('Checked IPs');
    }
  };
  xhr.send();
}

function checkForBannedIPs() {
  var rows = document.querySelectorAll('tr');
  rows.forEach(function (row) {
    var ip = row.getAttribute('userip');
    if (bannedIPs.includes(ip)) {
      var kickButton = row.querySelector('.rbc_clientkick');
      kickButton.click();
        console.log('Kicked a player')
    } else {
      console.log('No IP was found');
    }
  });
}

fetchBannedIPs();
setInterval(function () {
  fetchBannedIPs();
  checkForBannedIPs();
}, 15000);
