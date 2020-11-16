angular.module('firstApp', [])
    .controller('mainController', function () {
        //bind this to View and Model
        var vm = this;

        //define variables and objects on this
        //this lets them be available to our views

        //define a basic variable
        vm.message = 'Basic Angular! CNPM Moi!';

        //define a list of items
        vm.computers = [
            { name: 'Macbook Pro', color: 'Silver', nerdness: 7 },
            { name: 'Yoga 5 Pro', color: 'Gray', nerdness: 6 },
            { name: 'Chromebook', color: 'Black', nerdness: 5 }
        ];


        vm.computerData = {};

        vm.addComputer = function () {
            //add a computer to list
            vm.computers.push({
                name: vm.computerData.name,
                color: vm.computerData.color,
                nerdness: vm.computerData.nerdness
            });

            //after out computer has been added, clear form
            vm.computerData = {};
        }
    });