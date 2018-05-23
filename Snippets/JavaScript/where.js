// In HTML, JavaScript code must be inserted between <script> and </script> tags.

<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>


// External JavaScript
// Scripts can also be placed in external files:
// External file: myScript.js
function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}