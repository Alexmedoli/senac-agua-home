

document.getElementById('fileUplpader').addEventListener('change', function(event){
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {

        document.getElementById('imagePreview').src = e.target.result;

        document.getElementById('imagePreview').style.display = 'block';

        document.getElementById('cameraIcon').style.display = 'none';
    };
    reader.readAsDataURL(file);
});

