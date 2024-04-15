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
    var content = document.getElementById('myContent');

    // Hide content when modal is displayed
    if (modal.style.display === 'none' || modal.style.display === '') {
        content.style.display = 'none';
        modal.style.display = 'block';
    } else {
        content.style.display = 'block';
        modal.style.display = 'none';
    }
}

// Event listener for the modal open button
document.getElementById("openModalButton").addEventListener("click", toggleModal);
