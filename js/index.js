        document.getElementById('plantForm').addEventListener('submit', function(event) {
          event.preventDefault();
    
          // Simulating upload process
          setTimeout(function() {
            // Show success alert
            document.getElementById('alert').innerHTML = `
              <div class="alert alert-success" role="alert">
                Plant details successfully uploaded!
              </div>
            `;
            document.getElementById('alert').style.display = 'block';
    
            // Clear form fields after 3 seconds
            setTimeout(function() {
              document.getElementById('plantForm').reset();
              document.getElementById('alert').style.display = 'none';
            }, 3000);
          }, 2000);
        });
      

        