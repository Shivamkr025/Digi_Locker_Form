document.getElementById('aadhaarForm').addEventListener('submit', async function (event) {

    event.preventDefault();  
    const mobileNumber = document.getElementById('mobileNumber').value; 

    try {
        const aadhaarResponse = await fetch('http://localhost:7155/fetch/aadhaar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mobileNumber: mobileNumber })
        });

        const aadhaarData = await aadhaarResponse.json(); 

        if (aadhaarResponse.ok && aadhaarData.message === 'Auto Approved') {
            alert('Auto Approved Aadhaar!')

        } else {
            const idCardResponse = await fetch('http://localhost:7155/validate/Idcard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ mobileNumber: mobileNumber })
            });
            
            if (idCardResponse.ok) {
                const idCardData = await idCardResponse.json();
                console.log('ID Card Validation:', idCardData) 
                alert('Auto Approved ID Card !')
                
            } else {                
                alert('Auto Decline !')
            }
        }
    } catch (error) {
        console.error('Error:', error)
        alert('Server error. Please try again later.')
    }
});
