export const BASE_URL = 'http://localhost:8000'

export const API_PATHS = {
    AUTH: {
        REGISTER: '/api/auth/register', //Register a new user (Admin or member)
        LOGIN: '/api/auth/login', // Authenticate user and return JWT Token
        GET_PROFILE: '/api/auth/profile' // Get Logged-in user details
    },
    USERS: {
        GET_ALL_USERS: '/api/users', // Get all users (admin only)
        GET_USER_BY_ID: (userId) => `/api/users/${userId}`, // Get user by ID
        CREATE_USER: '/api/users', // create a new user (admin only)
        UPDATE_USER: (userId) => `/api/users/${userId}`, // update user details
        DELETE_USER: (userId) => `/api/users/${userId}`, // Delete a user 
    },
    TASKS: {
        GET_DASHBOARD_DATA: '/api/tasks/dashboard-data', // get dashboard data
        GET_USER_DASHBOARD_DATA: '/api/tasks/user-dashboard-data', // get user dashboard data
        GET_ALL_TASKS: '/api/tasks', // Get all tasks
        GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`, // get task by id
        CREATE_TASK: '/api/tasks', // Create a new task (admin only)
        UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`, // Update task details
        DELETE_TASK: (taskId) => `/api/tasks/${taskId}`, // Delete a task (admin only)
        UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`, // Update task (admin only)
        UPDATE_TODO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo` // update todo checkList
    },
    REPORTS: {
        EXPORT_TASKS: '/api/reports/export/tasks', // download all tasks as an excel sheet
        EXPoRT_USERS: '/api/reports/export/users', // Download user-task report
    },
    IMAGE: {
        UPLOAD_IMAGE: 'api/auth/upload-image'
    }
}