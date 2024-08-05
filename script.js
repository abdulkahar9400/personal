document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.word span');

    spans.forEach((span, idx) => {
        span.addEventListener('click', (e) => {
            e.target.classList.add('active');
        });
        span.addEventListener('animationend', (e) => {
            e.target.classList.remove('active');
        });

        // Initial animation
        setTimeout(() => {
            span.classList.add('active');
        }, 750 * (idx + 1));
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;
  
    function expandCard(index) {
      cards.forEach((card, i) => {
        if (i === index) {
          card.classList.add("expanded");
        } else {
          card.classList.remove("expanded");
        }
      });
    }
  
    function automateCards() {
      expandCard(currentIndex);
      currentIndex = (currentIndex + 1) % cards.length;
      setTimeout(automateCards, 2000); // Change cards every 2 seconds
    }
  
    automateCards(); // Start the automation
  });

  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function goToExternalLink(url) {
        window.location.href = url;
    }



    function colo(id) {
      // Reset the color of all navigation items to white
      var items = document.querySelectorAll(".navmain1 li");
      items.forEach(function(item) {
        item.style.color = "#fff";
      });
    
      // Set the color of the clicked item to red
      document.getElementById(id).style.color = "#00ffff";
    }

    function color(id) {
      // Reset the color of all navigation items to white
      var items = document.querySelectorAll(".navmain li");
      items.forEach(function(item) {
        item.style.color = "#fff";
      });
    
      // Set the color of the clicked item to red
      document.getElementById(id).style.color = "#00ffff";
    }
    
    
    function showsidebar(){
      const sidebar =document.querySelector('.navmain1')
      sidebar.style.display='flex'

    }

    function hidesidebar(){
      const sidebar =document.querySelector('.navmain1')
      sidebar.style.display='none'

    }


  
  
    