document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation items
    var navItems = document.querySelectorAll('.nav-items a');

    // Hamburger menu and navigation container
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenu = document.querySelector('.close-menu');
    const navContainer = document.querySelector('.nav-items');
    
    // Get the "Shop All Products" nav-item and its dropdown items
    const shopAllNavItem = document.querySelector('#shop-all > a');
    const shopAllDropdownItems = document.querySelectorAll('#shop-all .dropdown-menu a');

    // Function to remove "active" class from all navigation items
    function deactivateNavItems() {
        navItems.forEach(function(item) {
            item.classList.remove('active');
        });
    }
    

    // Function to collapse the menu
    function collapseMenu() {
        hamburgerMenu.classList.remove('active');
        navContainer.classList.remove('active');
    }

    // Add click event listener to each navigation item
    navItems.forEach(function(navItem) {
        navItem.addEventListener('click', function() {
            // Remove the "active" class from all navigation items
            deactivateNavItems();

            // Add the "active" class to the clicked navigation item
            navItem.classList.add('active');

            // Collapse the menu after clicking a nav item
            collapseMenu();
        });
    });

    // Add click event listener to each dropdown item under "Shop All Products"
    shopAllDropdownItems.forEach(function(dropdownItem) {
        dropdownItem.addEventListener('click', function() {
            // Remove the "active" class from all navigation items
            deactivateNavItems();

            // Add the "active" class to "Shop All Products"
            shopAllNavItem.classList.add('active');
        });
    });

    // Add scroll event listener to highlight the active section
    window.addEventListener('scroll', function() {
        var currentScroll = window.scrollY;

        // Loop through sections to find the one in view
        document.querySelectorAll('.content-section').forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.clientHeight;

            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                // Remove the "active" class from all navigation items
                deactivateNavItems();

                // Find the corresponding navigation item and add the "active" class
                var correspondingNavItem = document.querySelector('a[href="#' + section.id + '"]');
                if (correspondingNavItem) {
                    correspondingNavItem.classList.add('active');
                }
            }
        });
    });

    // Hamburger menu functionality
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        navContainer.classList.toggle('active');
    });

    closeMenu.addEventListener('click', function() {
        collapseMenu();
    });
});

// Opening Image
   window.addEventListener('scroll', () => {
  const content = document.querySelector('.content1');
  const navbar = document.querySelector('.navbar');
  const triggerPoint = window.innerHeight / 1.3;

  if (content.getBoundingClientRect().top < triggerPoint) {
    content.classList.add('visible');
    navbar.style.display = 'block'; // show navbar after hero
  }
});

 window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });



     document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const content = button.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });