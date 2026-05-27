// Function to show selected section
function showSection(sectionId) {

    // Hide all sections first
    document.getElementById("donate").style.display = "none";
    document.getElementById("volunteer").style.display = "none";
    document.getElementById("rewards").style.display = "none";

    // Show selected section
    document.getElementById(sectionId).style.display = "block";
}


// Function to go back to home (hide all sections)
function goHome() {
    document.getElementById("donate").style.display = "none";
    document.getElementById("volunteer").style.display = "none";
    document.getElementById("rewards").style.display = "none";
}


// Donation Submission
function submitDonation() {

    var name = document.getElementById("donorName").value;
    var phone = document.getElementById("donorPhone").value;
    var food = document.getElementById("foodDetails").value;

    if (name === "" || phone === "" || food === "") {
        document.getElementById("donateMsg").innerHTML = "Please fill all fields!";
        document.getElementById("donateMsg").style.color = "red";
    } else {
        document.getElementById("donateMsg").innerHTML = "Donation Submitted Successfully! 🎉";
        document.getElementById("donateMsg").style.color = "green";
    }
}


// Volunteer Registration
function submitVolunteer() {

    var name = document.getElementById("volName").value;
    var phone = document.getElementById("volPhone").value;

    if (name === "" || phone === "") {
        document.getElementById("volMsg").innerHTML = "Please fill all fields!";
        document.getElementById("volMsg").style.color = "red";
    } else {
        document.getElementById("volMsg").innerHTML = "Registered Successfully! 🙌";
        document.getElementById("volMsg").style.color = "green";
    }
}


// Simple Reward System
function checkRewards() {

    // Basic fixed reward points
    var points = 100;

    document.getElementById("rewardMsg").innerHTML =
        "You have " + points + " Reward Points ⭐";
}