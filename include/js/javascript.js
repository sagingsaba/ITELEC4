document.addEventListener('DOMContentLoaded', function () {
  const student = document.getElementById('student');
  const instructor = document.getElementById('instructor');
  const title = document.querySelector('.title.student');

  student.addEventListener('change', function() {
      if (student.checked) {
          title.textContent = 'Student';
      }
  });

  instructor.addEventListener('change', function() {
      if (instructor.checked) {
          title.textContent = 'Instructor';
      }
  });
});


// Function to toggle the modal
function toggleModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}


// Event listener for the modal open button
document.getElementById("openModalButton").addEventListener("click", toggleModal);

// You can add more modal functionality here if needed