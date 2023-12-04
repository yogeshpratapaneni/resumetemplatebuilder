// script.js

function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.classList.toggle('active');
}

function addItem(listId, newItemValue) {
  const itemList = document.getElementById(listId);
  const newItem = document.createElement('li');
  newItem.textContent = newItemValue;
  itemList.appendChild(newItem);
}

function addSkill() {
  const newSkillInput = document.getElementById('newSkill');
  const newSkillValue = newSkillInput.value.trim();

  if (newSkillValue !== '') {
    addItem('skillsList', newSkillValue);
    newSkillInput.value = '';
  }
}

function addWorkExperience() {
  const newExperienceInput = document.getElementById('newExperience');
  const newExperienceValue = newExperienceInput.value.trim();

  if (newExperienceValue !== '') {
    addItem('experienceList', newExperienceValue);
    newExperienceInput.value = '';
  }
}

function addProject() {
  const newProjectInput = document.getElementById('newProject');
  const newProjectValue = newProjectInput.value.trim();

  if (newProjectValue !== '') {
    addItem('projectsList', newProjectValue);
    newProjectInput.value = '';
  }
}

function setupSectionToggles() {
  const sections = ['skills', 'experience', 'projects'];

  sections.forEach(sectionId => {
    const toggleButton = document.getElementById(`toggle${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`);
    toggleButton.addEventListener('click', () => toggleSection(`${sectionId}List`));
  });
}

// Initialize section toggles
setupSectionToggles();