// setup materialize components
document.addEventListener('DOMContentLoaded', function () {
  var modals = document.querySelectorAll('.modal')
  M.Modal.init(modals)
  // M é a library do materialize
  // Modal é o método

  var items = document.querySelectorAll('.collapsible')
  M.Collapsible.init(items)
})