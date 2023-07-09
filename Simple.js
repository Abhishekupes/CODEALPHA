function convertImage() {
  var input = document.getElementById('image-input');
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var img = new Image();
      img.src = e.target.result;

      img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        var pngURL = canvas.toDataURL('image/png');
        var downloadLink = document.getElementById('download-link');
        downloadLink.href = pngURL;
        downloadLink.download = 'converted.png';
        downloadLink.click();
      };
    };

    reader.readAsDataURL(input.files[0]);
  }
}
