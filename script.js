function submitForm() {
    const form = document.getElementById("myForm");
    let output = "<h2>Form Data:</h2><ul>";

    // Iterate over form elements
    for (const element of form.elements) {
        if (element.tagName === 'INPUT' && element.type !== 'button') {
            output += `<li><strong>${element.name}:</strong> ${element.value}</li>`;
        }
    }

    output += "</ul>";

    document.getElementById("formData").innerHTML = output;
}