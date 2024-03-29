const newguitarPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-new-guitar-post').value.trim();
  const content = document.querySelector('#content-new-guitar-post').value.trim();

  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create a new post.');
    }
  }
};


const newguitarPostForm = document.querySelector('.new-guitar-post-form');
if (newguitarPostForm) {
  newguitarPostForm.addEventListener('submit', newguitarPostFormHandler);
}
