$('.collapse_link').click(function(){
        var $this = $(this);
        $this.toggleClass('collapse_link');
        if($this.hasClass('collapse_link')){
            $this.text('Lire plus...');         
        } else {
            $this.text('Lire moins...');
        }
    });