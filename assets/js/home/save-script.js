// Sauvegarder les modifications du script
document.getElementById('save-script-btn').addEventListener('click', function () {
    const scriptName = document.getElementById('script-select').value;
    const scriptContent = document.getElementById('script-content').value;

    fetch('/save-script', {
        method: 'POST',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'script_name': scriptName,
            'script_content': scriptContent
        })
    })
        .then(response => response.text())
        .then(data => {
            var editModal = bootstrap.Modal.getInstance(document.getElementById('editScriptModal'));
            editModal.hide();

            var successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
        })
        .catch((error) => {
            console.error('Erreur lors de la sauvegarde du script:', error);
        });
});