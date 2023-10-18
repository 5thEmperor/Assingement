const form = document.getElementById('registrationForm');
        const modal = document.getElementById('modal');
        const modalData = document.getElementById('modal-data');
        const closeModal = document.getElementById('close-modal');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
    
            const formData = {};
            for (const element of form.elements) {
                if (element.name) {
                    if (element.type === 'radio' && element.name === 'gender') {
                        if (element.checked) {
                            formData[element.name] = element.value;
                        }
                    } else {
                        formData[element.name] = element.value;
                    }
                }
            }
            let html = '<h4>';
            for (const key in formData) {
                html += `<li><strong>${key}:</strong> ${formData[key]}</li>`;
            }
            html += '</h4>';
            modalData.innerHTML = html;
            modal.style.display = 'block';
        });
    
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });