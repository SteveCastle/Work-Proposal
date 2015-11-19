(function() {

    var invoicer = angular.module('invoicer', ["xeditable", 'ui.sortable']);

    invoicer.run(function(editableOptions) {
        editableOptions.theme = 'bs3';
    });

    invoicer.controller('invController', function($scope){
        $scope.date = new Date();

        $scope.dt = new Date();

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        // Your address
        $scope.our_address = "7500 W. Lake Meade Blvd";
        $scope.our_address_linetwo = "Unit 435";
        $scope.our_city = "Las Vegas,";
        $scope.our_state = "NV";
        $scope.our_zip = "89128";

        // Their name and address
        $scope.to_company = "Discount Retail Store Services";
        $scope.to_address = "5075 West Diablo Dr Suite 200";
        $scope.to_city = "Las Vegas,";
        $scope.to_state = "NV";
        $scope.to_zip = "89118";

        // Bottom message
        $scope.addressee = "Tobias";
        $scope.personal = "We really enjoyed working with you. Your story is one that we found unique and engaging. " +
        "We hope we were able to grant all your concept, design and development wishes. Please do not hesitate " +
        "to contact us with any questions or concerns. We look forward to watching your story unfold.";
        $scope.firstThead = "DESCRIPTION";
        $scope.secondThead = "MILESTONE";
        $scope.thirdThead = "TOTAL";
        $scope.closing = "Sincerely,";
        $scope.signOff = "The company who did this work for you";

        // Project specifics
        $scope.number = "1";
        $scope.project_name = "Project Name";
        $scope.lead_in = "Services Rendered...";

        // Block the price value from being submitted if it has anything but whole numbers
        $scope.checkValue = function(data) {
            if (isNaN(data)) {
                return "Numbers only please.";
            }
        };

        // Loop through the line items and get the total. Clicking the X to remove a line item splices the array, removes the line item, and the total adjusts.
        $scope.getTotal = function(){
            var total=0;
            for(var i=0; i < $scope.invoice.line_items.length; i++) {
                var line = $scope.invoice.line_items[i];
                total += (line.price * 1);
            }
            return total;
        };

        // Add item to invoice
        $scope.addItem = function() {
            $scope.invoice.line_items.push(this.invoice.temp);
            $scope.invoice.temp = {};
        };

        // Remove item from invoice
        $scope.removeItem = function(idx) {
            $scope.invoice.line_items.splice(idx, 1);
        };

        // Add note to invoice
        $scope.addNote = function() {
            $scope.sidebar.note.push(this.sidebar.temp);
            $scope.sidebar.temp = {};
        };
        // Remove note from invoice
        $scope.removeNote = function(idx) {
            $scope.sidebar.note.splice(idx, 1);
        };

        // Assign the line items and notes array to variables
        $scope.invoice = work;
        $scope.sidebar = notes;

        // Show the content after all the Model View stuff syncs.
        $scope.contentLoaded = true;

    });

    // Sidebar notes array
    var notes =
    {
        note: [
            {
                title: "New note title",
                body: "This is the note body. Here you can elaborate on things that might be unclear."
            },
            {
                title: "New note title",
                body: "This is the note body. Here you can elaborate on things that might be unclear."
            }

        ]
    };

    // Line item array
    var work =
    {
        line_items: [
            {
                title: "Wireframe and brand finalized",
                milestone: "1.5",
                price: "4500"
            },
            {
                title: "Design Finalized",
                milestone: "2",
                price: "2000"
            },
            {
                title: "Site coded and functional",
                milestone: "2.5",
                price: "6500"
            },
            {
                title: "Code polished and site fully launched",
                milestone: "3",
                price: "3500"
            }
        ]
    };

})();
