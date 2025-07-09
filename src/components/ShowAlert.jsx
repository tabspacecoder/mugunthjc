export function showAlert(message, type = 'success') {
    const alert = document.getElementById('customAlert');
    alert.textContent = message;
  
    // Tailwind color based on type
    const colorClasses = {
      success: 'bg-green-100 border-green-400 text-green-800',
      error: 'bg-red-100 border-red-400 text-red-800',
      warning: 'bg-yellow-100 border-yellow-400 text-yellow-800'
    };
  
    // Reset and apply new styles
    alert.className = `fixed top-5 right-5 z-50 px-4 py-3 rounded-lg shadow-md ${colorClasses[type]}`;
    alert.classList.remove('hidden');
  
    // Auto-hide after 3 seconds
    setTimeout(() => {
      alert.classList.add('hidden');
    }, 3000);
  }
  