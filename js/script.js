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

// Allow bootstrap navbar open on first click and go to link on second click
$('.dropdown').on('show.bs.dropdown', function () {
    $(this).siblings('.open').removeClass('open').find('a.dropdown-toggle').attr('data-toggle', 'dropdown');
    $(this).find('a.dropdown-toggle').removeAttr('data-toggle');
  });

// Hide the dropdown menu when the user click outside of the trigger element
// $(document).ready(function(){
//     // Show hide popover
//     $(".dropdown").click(function(){
//         $(this).find(".dropdown-menu").slideToggle("fast");
//     });
// });
$(document).on("click", function(event){
    var $trigger = $(".dropdown");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown-menu").slideUp("fast");
    }            
});

