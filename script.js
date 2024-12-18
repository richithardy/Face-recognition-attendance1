fetch('data.json')
.then(response=> {
    if(!response.ok) {
        throw new Error('HTTP error! status: ${response.status}');
    }
    return response.json();
})
.then(data => {
    console.log("Fetched data:", data);
    if (data.attendanceData && Array.isArray(data.attendanceData)) {
        const labels = data.attendanceData.map(item => item. label);
        const values = data.attendanceData.map(item => item.value);
        console.log("Labels:", labels);
        console.log("values:", values);
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx , {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    backgrounColor: ['green','red']
                }]
            },
            Options: {
                reponsive: true
            }
            
        });
    }
    
    
})
.catch(error => {
    console.error('There was a problem with the fetch operation:',error);
});