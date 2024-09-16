// console.log('Hello from my script!');

// console.log('Script loaded!');

// function copyCode(btn) {
//     // Get the parent element of the button (which should be the code block)
//     var codeBlock = btn.parentNode;
  
//     // Create a range object to select the code block contents
//     var range = document.createRange();
//     range.selectNodeContents(codeBlock);
  
//     // Create a new selection object and add the range to it
//     var selection = window.getSelection();
//     selection.removeAllRanges();
//     selection.addRange(range);
  
//     // Copy the selection to the clipboard
//     document.execCommand('copy');
  
//     // Remove the selection from the window
//     selection.removeAllRanges();
  
//     // Change the text of the button to indicate that the code was copied
//     btn.innerHTML = 'Citation copied <i class="fas fa-check-circle" color="darkgreen"></i>';
  
//     // Reset the button text after 2 seconds
//     setTimeout(function() {
//       btn.innerHTML = 'Copy';
//     }, 2000);
//   }
  
// function copyCode() {
//   const code = document.getElementById("code-block").textContent.trim();
//   navigator.clipboard.writeText(code).then(() => {
//     console.log("Code copied successfully!");
//   }).catch((error) => {
//     console.error("Copy failed:", error);
//   });
// }

var clipboard = new ClipboardJS('.copy-button');
clipboard.on('success', function (e) {
  console.log('Copied to clipboard!');
  var button = e.trigger;
  button.innerHTML = 'Citation copied <i class="fas fa-check-circle" color="lightgreen"></i>';
  setTimeout(function () {
    button.innerHTML = 'Copy citation';
  }, 1000);
});