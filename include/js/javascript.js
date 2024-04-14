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


// eye toggle
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js"></script>

        function togglePassword() {
            var passwordField = document.getElementById("password");
            var eyeIcon = document.getElementById("eye-icon");
            if (passwordField.type === "password") {
                passwordField.type = "text";
                eyeIcon.classList.remove("fa-eye");
                eyeIcon.classList.add("fa-eye-slash");
            } else {
                passwordField.type = "password";
                eyeIcon.classList.remove("fa-eye-slash");
                eyeIcon.classList.add("fa-eye");
            }
        }
