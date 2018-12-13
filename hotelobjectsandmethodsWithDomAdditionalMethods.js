var hotel = {
    name: "CareerDevs Java Hotel",
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

    updateAvaliableRoomsList: function() {
        var rmList = "<form> <select id='mySelect'>";
            for (var i = 0; i < this.roomNumbersAvailable.length; i++) {
                rmList += '<option value="' + this.roomNumbersAvailable[i] + '">' + this.roomNumbersAvailable[i] + "</option>";
            }
            rmList += "</select> </form>";
            document.getElementById("rmsAvail").innerHTML = rmList;
    },
    
    updateBookedRoomsList: function() {
        var roomsBooked = "<form> <select id='bookedDropdown'>";
            for (var i = 0; i < this.roomNumbersBooked.length; i++) {
                roomsBooked += '<option value="' + this.roomNumbersBooked[i] + '">' + this.roomNumbersBooked[i] + "</option>";
        }
        roomsBooked += "</select> </form>";
        document.getElementById("roomsBooked").innerHTML = roomsBooked;
    },
    
    bookRoom: function() {
        if (this.numberOfRoomsAvailable() > 0) {
            // Get selected room from user dropdown selection
            var roomPicked = document.getElementById("mySelect").value;
            
            // Remove selected room from roomNumbersAvailable 
            // Push selected room into roomNumbersBooked
            this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(roomPicked), 1));

            // // update rooms AVAIL dropdown  // essentially removing the selected room from the room avail dropdowm
            this.updateAvaliableRoomsList();

            // update rooms BOOKED dropdown  // essentially takes the room taken from rooms avail and puts it into rooms booked dropwdown
            this.updateBookedRoomsList()
            document.getElementById("demo").innerHTML = "You will love room  " + roomPicked + " it is a wonderful choice!";
        } else {
            document.getElementById("demo").innerHTML = "I'm sorry there are no rooms currently available, please check back soon.";
        }
    },
    
    checkoutRoom: function() {
            // Get selected room from user dropdown selection
            var roomReturned = document.getElementById("bookedDropdown").value;
            
            // Remove selected room fromroomNumbersBooked
            // Push selected room into roomNumbersAvailable 
            this.roomNumbersAvailable = this.roomNumbersAvailable.concat(this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(roomReturned), 1));


            // update rooms AVAIL dropdown  // essentially adding the selected room to roomNumbersAvailable
            this.updateAvaliableRoomsList();
            
            // update rooms BOOKED dropdown  // essentially removing the selected room from the booked dropdown
            this.updateBookedRoomsList();
            document.getElementById("demo").innerHTML = "Thank you for your stay. I hope you have enjoyed room " + roomReturned + ". Please come back soon!";
    }
};


// Select a user clicked specific room option from a dropdown
// Begin available rooms select dropdown

hotel.updateAvaliableRoomsList();

// Begin booked rooms select dropdown
hotel.updateBookedRoomsList();


