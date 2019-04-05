function myFunction() {
    var HttpClient = function () {
        this.get = function (aUrl, aCallback) {
            var aHttpRequest = new XMLHttpRequest();
            aHttpRequest.onreadystatechange = function () {
                if (aHttpRequest.readyState == 4 && aHttpRequest.status == 200)
                    aCallback(aHttpRequest.responseText);
            }
            aHttpRequest.open("GET", aUrl, true);
            aHttpRequest.send(null);
        }

    }

    var ip_ad = document.forms["myForm"]["ip_address"].value;
    // var theUrl = "https://api.ipinfodb.com/v3/ip-city/?key=6b9557d16b99d30644331e6f387e738dc58f7ee6a3015b9192dacd1eb1513cc9&format=json&ip=178.255.10.178";
    var theUrl = "https://api.ipinfodb.com/v3/ip-city/?key=6b9557d16b99d30644331e6f387e738dc58f7ee6a3015b9192dacd1eb1513cc9&format=json&ip=" + ip_ad;

    var client = new HttpClient();
    client.get(theUrl, function (response) {
        var response1 = JSON.parse(response);
        //alert(response);
        document.getElementById("statusCode").innerHTML = "Status: " + response1.statusCode;
        // document.getElementById("statusMessage").innerHTML = response1.statusMessage;
        document.getElementById("ipAddress").innerHTML = "IP: " + response1.ipAddress;
        document.getElementById("countryCode").innerHTML = "Coutry code: " + response1.countryCode;
        document.getElementById("countryName").innerHTML = "Country name: " + response1.countryName;
        document.getElementById("regionName").innerHTML = "Region name: " + response1.regionName;
        document.getElementById("cityName").innerHTML = "City name: " + response1.cityName;
        document.getElementById("zipCode").innerHTML = "Zipcode: " + response1.zipCode;
        document.getElementById("latitude").innerHTML = "Latitude: " + response1.latitude;
    });
}

