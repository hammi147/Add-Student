 // Array to store students
    const students = [];

    // Get form and list elements
    const form = document.getElementById('studentForm');
    const studentList = document.getElementById('studentList');

    // Form submit event
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get input values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // Check for duplicate email or password
      const duplicate = students.find(student => 
        student.email === email || student.password === password
      );

      if (duplicate) {
        alert('Email or password is already taken!');
      } else {
        // Push new student
        const newStudent = { name, email, password };
        students.push(newStudent);

        // Show in list
        const li = document.createElement('li');
        li.textContent = `Name: ${name}, Email: ${email}`;
        studentList.appendChild(li);

        // Reset form
        form.reset();
      }
    });