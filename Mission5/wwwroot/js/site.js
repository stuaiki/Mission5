// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// This is jQuery. Based on id in cshtml, making methods
// Create valuable named hours and based on what user input, change the output.
// If user input valid value, it return total cost, and if user input invalid value, clear all boxes and show alert message.
$('#calcTotal').click( function () {
    let hours = parseInt($('#hours').val());
    if (hours > 0) {
        let totalCost = hours * 30;

        $('#totalCost').val("$" + totalCost);
    }
    else {
        alert("Enter the valid number.")
        $("#hours").val("");
        $('#totalCost').val("");
    }
})