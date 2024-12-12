let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});


const hideValues = {
    hide: "hidden",
    show: "showme",
    double: "dblclick"
  };
  
  function toggleEventHandler(event) {
    const targetSelecor = event.target.dataset.target;
    const target = document.querySelector(targetSelecor);
    const showHide = target.dataset.hideme == hideValues.hide ? hideValues.show : hideValues.hide;
    const toggleTargets = document.querySelectorAll('.toggle-target');
    toggleTargets.forEach(el => {
      el.dataset.hideme = hideValues.hide;
    });
    target.dataset.hideme = showHide;
  }
  
  /* set up event handlers on the buttons */
  const options = {
    capture: true
  };
  /* we do this first to prevent the click from happening */
  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach(el => {
    el.addEventListener('click', toggleEventHandler, options)
  });