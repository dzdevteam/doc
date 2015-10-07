$(document).ready(function(){
    // Generate nav for h4
    $('section.h3').each(function() {
        var $h3 = $(this),
            $h3_nav = $('a[href=#' + $h3.attr('id') + ']').parent(),
            $ul = null;
        
        $h3.find('h4').each(function() {
            if ($h3_nav.find('ul').length == 0) {
                $ul = jQuery('<ul></ul>');
                $h3_nav.append($ul);
                $h3_nav.addClass('parent');
            }
            $ul.append('<li><a href="#' + $(this).attr('id') + '">' + $(this).text() + '</a></li>');
        });
    });
    $('#nav').onePageNav();

    $('a[href^="http"]').attr('target','_blank');
    
    $('.toggle').click(function(){
        $('.overview').toggleClass('open');
    });
});
