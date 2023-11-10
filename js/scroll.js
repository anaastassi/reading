window.addEventListener('scroll', function() {
    if( this.scrollY > 750){
        document.getElementById('btnDown').style.display = 'block';
    }
    else if(this.scrollY <= 120){
        document.getElementById('btnDown').style.display = 'none';
    }})