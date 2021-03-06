// Allow the read more/less functionality
$('.collapse_link').click(function(){
        var $this = $(this);
        $this.toggleClass('collapse_link');
        if($this.hasClass('collapse_link')){
            $this.text('Lire plus...');         
        } else {
            $this.text('Lire moins...');
        }
    });


  // Initialize tooltip component
  $('[data-toggle="tooltip"]').tooltip({
    trigger : 'hover'
  })
  // Prevent the page to scroll back to the top when clicking on the tooltip
  $('[data-toggle="tooltip"]').on('click', function(e) {e.preventDefault(); return true;});  






