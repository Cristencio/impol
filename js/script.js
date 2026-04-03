    (function() {
      const menuBtn = document.getElementById('menuPopoverBtn');
      const menuPopover = document.getElementById('mobileMenuPopover');
      let isMenuOpen = false;

      function closeMenu() {
        if (menuPopover) {
          menuPopover.classList.add('hidden');
          isMenuOpen = false;
          menuBtn?.setAttribute('aria-expanded', 'false');
        }
      }

      function openMenu() {
        if (menuPopover) {
          menuPopover.classList.remove('hidden');
          isMenuOpen = true;
          menuBtn?.setAttribute('aria-expanded', 'true');
        }
      }

      function toggleMenu(e) {
        e.stopPropagation();
        if (isMenuOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      }

      if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
      }

      // Fechar ao clicar fora do menu
      document.addEventListener('click', function(event) {
        if (isMenuOpen && menuPopover && !menuPopover.contains(event.target) && !menuBtn?.contains(event.target)) {
          closeMenu();
        }
      });

      // Fechar ao clicar em um link do menu
      const menuLinks = menuPopover?.querySelectorAll('a');
      if (menuLinks) {
        menuLinks.forEach(link => {
          link.addEventListener('click', closeMenu);
        });
      }

      // Fechar ao pressionar ESC
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
          closeMenu();
        }
      });
    })();

    