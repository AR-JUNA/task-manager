/**
 * Task Manager Application
 * Web Infrastructure Assignment - 2026
 * 
 * Created by: Arjuna Caleb Gyan
 * This application demonstrates:
 * - Client-side JavaScript for dynamic content
 * - Browser localStorage for data persistence
 * - DOM manipulation and event handling
 * - Responsive user interface
 */

let tasks = [];
let currentFilter = 'all';

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const filterButtons = document.querySelectorAll('.filter-btn');

// Statistics elements
const totalTasksEl = document.getElementById('totalTasks');
const completedTasksEl = document.getElementById('completedTasks');
const pendingTasksEl = document.getElementById('pendingTasks');


document.addEventListener('DOMContentLoaded', () => {
    loadTasksFromStorage();
    renderTasks();
    updateStatistics();
    setupEventListeners();
});


function setupEventListeners() {
    // Add task button click
    addTaskBtn.addEventListener('click', addTask);
    
    // Enter key to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderTasks();
        });
    });
}

// ============================================
// Task Management Functions
// ============================================

/**
 * Add a new task
 */
function addTask() {
    const taskText = taskInput.value.trim();
    
    // Validate input
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Create task object
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    // Add to tasks array
    tasks.unshift(task); // Add to beginning of array
    
    // Save to localStorage
    saveTasksToStorage();
    
    // Clear input
    taskInput.value = '';
    
    // Update UI
    renderTasks();
    updateStatistics();
    
    // Focus back on input
    taskInput.focus();
}


function toggleTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveTasksToStorage();
        renderTasks();
        updateStatistics();
    }
}


function deleteTask(taskId) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasksToStorage();
        renderTasks();
        updateStatistics();
    }
}

function renderTasks() {
    // Filter tasks based on current filter
    let filteredTasks = tasks;
    
    if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(t => t.completed);
    } else if (currentFilter === 'pending') {
        filteredTasks = tasks.filter(t => !t.completed);
    }
    
    // Clear task list
    taskList.innerHTML = '';
    
    // Show/hide empty state
    if (filteredTasks.length === 0) {
        emptyState.classList.remove('hidden');
        if (currentFilter === 'completed') {
            emptyState.innerHTML = '<p>✅ No completed tasks yet!</p>';
        } else if (currentFilter === 'pending') {
            emptyState.innerHTML = '<p>🎉 All tasks completed!</p>';
        } else {
            emptyState.innerHTML = '<p>🎯 No tasks yet. Add your first task above!</p>';
        }
    } else {
        emptyState.classList.add('hidden');
    }
    
    // Render each task
    filteredTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
    });
}

function createTaskElement(task) {
    const taskItem = document.createElement('div');
    taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
    taskItem.dataset.id = task.id;
    
    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(task.id));
    
    // Task text
    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = task.text;
    
    // Task time
    const taskTime = document.createElement('span');
    taskTime.className = 'task-time';
    taskTime.textContent = formatDate(task.createdAt);
    
    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
    
    // Append elements
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(taskTime);
    taskItem.appendChild(deleteBtn);
    
    return taskItem;
}


function updateStatistics() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;
    
    totalTasksEl.textContent = total;
    completedTasksEl.textContent = completed;
    pendingTasksEl.textContent = pending;
}

function saveTasksToStorage() {
    try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function loadTasksFromStorage() {
    try {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        tasks = [];
    }
}


function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) {
        return 'Just now';
    } else if (diffMins < 60) {
        return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
        return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffDays < 7) {
        return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else {
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
        });
    }
}

// ============================================
// Console Log for Demo
// ============================================
console.log('✅ Task Manager Application Loaded');
console.log('📊 Web Infrastructure: Browser → GitHub Pages → Static Files');
console.log('💾 Data Storage: Browser localStorage API');
console.log('👨‍💻 Created by: Arjuna Caleb Gyan');

console.log('🏫 Institution: African Leadership College of Higher Education');
