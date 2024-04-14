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