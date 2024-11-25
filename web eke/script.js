// script.js
function filterSchedule() {
    const dayFilter = document.getElementById('day').value;
    const rows = document.querySelectorAll('#class-schedule tbody tr');

    rows.forEach(row => {
        if (dayFilter === 'all') {
            row.style.display = '';
        } else {
            row.style.display = row.getAttribute('data-day') === dayFilter ? '' : 'none';
        }
    });
}
