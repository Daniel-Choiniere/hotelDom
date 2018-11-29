var currentYear = 2018;

var library = {
    name: "Library of Code",
    operatingHours: "9:00a.m. - 7:00p.m. 7 Days a Week",
    yearBuilt: 1985,
    dailyLateFee: 1.25,
    booksAvailable: ["Code Complete", "Clean Code", "The Obstacle is the Way", "The War of Art", "Psycho Cybernetics"],
    booksCheckedout: [],
    bookGenre: ["Romance", "Mystery", "Suspense", "Horror", "Comedy", "Fiction", "Non-fiction"],
    
    numberOfbooksAvailable: function() {
        // length of the number of rooms available, returned as an integer (1,5,20, etc)
        return this.booksAvailable.length;
    },
    
    ageLibrary: function() {
        return "The Library of Code is " + (currentYear - this.yearBuilt) + " years old";
    },

    totalNumberOfBooks: function() {
        return this.booksAvailable.length + this.booksCheckedout.length;
    },
    
    // method to book a random room
    
    checkoutBook: function() {
        if (this.numberOfbooksAvailable() > 0) {
            // select a random avaliable room
            var randomBook = this.booksAvailable[Math.floor(Math.random() * this.numberOfbooksAvailable())];
            this.booksCheckedout.unshift(this.booksAvailable.splice(this.booksAvailable.indexOf(randomBook), 1)[0]);
            // this.roomNumbersBooked.unshift(randomRoom);
        } else {
        console.log("Sorry, all of olibraryur books are currently checked out. Please check back soon.");
        }
    },
    
    // method to check out a random (already booked) room
    returnBook: function() {
        if (this.booksCheckedout.length > 0) {
            var randomBookReturn = this.booksCheckedout[Math.floor(Math.random() * this.booksCheckedout.length)];
            this.booksAvailable.unshift(this.booksCheckedout.splice(this.booksCheckedout.indexOf(randomBookReturn), 1)[0]);
        } else {
        console.log("You do not have any books currently checked out.")
        }
    },
    
    lateFee: function(daysLate) {
        var totalFee = daysLate * this.dailyLateFee;
        return "Your total late fee is $" + totalFee;
    }
};

