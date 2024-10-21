// Handle theft report submission
document.getElementById('theftReportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const ownerName = document.getElementById('ownerName').value;
    const vehicleNumber = document.getElementById('vehicleNumber').value;
    const model = document.getElementById('model').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;

    // Create a new list item for the report
    const reportItem = document.createElement('li');
    reportItem.innerHTML = `
        <strong>Owner's Name:</strong> ${ownerName} <br>
        <strong>Vehicle Number:</strong> ${vehicleNumber} <br>
        <strong>Model:</strong> ${model} <br>
        <strong>Location:</strong> ${location} <br>
        <strong>Date:</strong> ${date} <br>
        <strong>Description:</strong> ${description}
    `;

    // Add the report to the report list
    document.getElementById('reportList').appendChild(reportItem);

    // Clear the form
    document.getElementById('theftReportForm').reset();
});

// Optional: Store reports in local storage (if you want to persist the reports)
function saveReportsToLocalStorage(report) {
    let reports = JSON.parse(localStorage.getItem('reports')) || [];
    reports.push(report);
    localStorage.setItem('reports', JSON.stringify(reports));
}

// Load map when 'Show Map' is clicked (on map.html)
function initMap() {
    // Example location (change to your desired location)
    const location = { lat: 28.7041, lng: 77.1025 }; // New Delhi coordinates

    // Create a new map centered at the location
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });

    // Add a marker at the location
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}