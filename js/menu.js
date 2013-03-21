Drupal.behaviors.cobas = {
  attach: function (context, settings) {
    jQuery('.menu-737', context).click(function () {
      if(jQuery(this).hasClass('showed')) {
          jQuery(this).removeClass('showed');
          jQuery('li.menuparent ul', context).each(function () {
          jQuery(this).css('visibility', 'hidden');
          jQuery(this).css('position','absolute');
          jQuery(this).css('top','1.8em');
          jQuery(this).slideUp();
         });
          jQuery('#block-nice-menus-1').css({'padding-bottom':'0px'}, 400);
     /* de nice_menus.js */
    jQuery('ul.nice-menu').superfish({
      // Apply a generic hover class.
      hoverClass: 'over',
      // Disable generation of arrow mark-up.
      autoArrows: false,
      // Disable drop shadows.
      dropShadows: false,
      // Mouse delay.
      delay: Drupal.settings.nice_menus_options.delay,
      // Animation speed.
      speed: Drupal.settings.nice_menus_options.speed
    // Add in Brandon Aaron�~@~Ys bgIframe plugin for IE select issues.
    // http://plugins.jquery.com/node/46/release
    }).find('ul').bgIframe({opacity:false});
    jQuery('ul.nice-menu ul').css('display', 'none');

      } else {
        jQuery(this).addClass('showed'); 
        delete jQuery('ul.nice-menu').superfish;
        jQuery('ul.nice-menu li').unbind('hover');
        jQuery('ul.nice-menu li').unbind('mouseover');
        jQuery('li.menuparent ul', context).each(function () {
          jQuery(this).css({'visibility' : 'visible',
                            'position':'relative',
                            'top':'8px'});
          jQuery('#block-nice-menus-1').css({'padding-bottom':'60px'}, 400);
          jQuery(this).slideDown();
        });
      }
    });
    }
  };
