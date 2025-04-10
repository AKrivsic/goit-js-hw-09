const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    formData = { ...formData, ...parsedData };
    emailInput.value = parsedData.email?.trim() || '';
    messageInput.value = parsedData.message?.trim() || '';
  } catch (error) {
    console.error('Error ', error);
  }
}

form.addEventListener('input', evt => {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted formData:', formData);

  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

emailInput.addEventListener('focus', () => {
  emailInput.placeholder = "Type area";
});

emailInput.addEventListener('blur', () => {
    emailInput.placeholder = "";
});