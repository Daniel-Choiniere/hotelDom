var hotel = {
    name: "CareerDevs Mega Hotel",
    rating: 5.0,
    numberOfRooms: 5,
    roomRate: 325.00,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],
    roomNumbersBooked: [],
    roomType: "Queen",
    
    numberOfRoomsAvailable: function() {
        // length of the number of rooms available, returned as an integer (1,5,20, etc)
        return this.roomNumbersAvailable.length;
    },
    
    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;
    },
    
    numberOfRooms: function() {
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },
    
    bookRoom: function() {
        if (this.numberOfRoomsAvailable() > 0) {
            // select a random avaliable room
            var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random() * this.roomNumbersAvailable.length)];
            this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
            this.roomNumbersBooked.push(randomRoom);
        }
    }
};

document.getElementById("hotelName").innerText = hotel.name;

// rmsAvail
var rmList = "<ul>";
for (var i=0; i < hotel.roomNumbersAvailable.length; i++) {
    
    rmList += "<li>" + hotel.roomNumbersAvailable[i] + "</li>";
    
}
rmList += "</ul>";

document.getElementById("rmsAvail").innerHTML = rmList;

