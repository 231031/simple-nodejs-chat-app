function change_bg(clicked_id)
{
    if (clicked_id == 1) {
        document.getElementById("bg_img").src="https://i.pinimg.com/originals/ef/21/20/ef212097b6111cd26f33b5373dbaf544.gif";
      } else if (clicked_id == 2) {
        document.getElementById("bg_img").src="https://i.pinimg.com/originals/4e/80/38/4e8038228e029c3ddd9c7b90b293af9d.gif";
      } else if (clicked_id == 3) {
        document.getElementById("bg_img").src="https://i.pinimg.com/originals/85/bf/2c/85bf2cd735d075bb9ece4be5996605b1.gif";
      }
      else if (clicked_id == 4) {
        document.getElementById("bg_img").src="https://i.pinimg.com/originals/52/86/71/528671b25753cd9e4f5e48c1586ae88b.gif";
      } else {
		document.getElementById("bg_img").src="https://i.pinimg.com/originals/be/1a/33/be1a338704efc57093b6dec8e196439b.gif";
	  }
    //document.getElementById("bg_img").src="image/afternoon.jpg";
}

document.getElementById('file').onchange = function (evt) {
    let tgt = evt.target || window.event.srcElement,
        files = tgt.files;
    
    // FileReader support
    if (FileReader && files && files.length) {
        let fr = new FileReader();
        fr.onload = function () {
            document.getElementById('bg_img').src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }
}