function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const profilePic = document.getElementById('profilePic');
        profilePic.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}
