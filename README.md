# TODO REST API - how to use

## General
- `git clone` - Clone the repository to your computer

## Backend
- `cd backend` - Go to folder with backend API
- `cp .env.example .env` - Edit credentials for MySQL database
- `composer install` - Install laravel packages
- `php artisan migrate` - Create tables in the database
- `php artisan serve` - Run backend client
- `http://localhost:8000` - Default address of the API

## Frontend
- `cd frontend` - Go to folder with frontend client
- `npm install` - Install components for frontend
- `npm run serve` - Run frontend client
- `http://localhost:8080` - Default address of the Client

## How to use
- The TODO is on the main site
- Go to option 'App'

### Adding
- Write name of task
- Click Enter to save
- Click Esc or elsewhere to cancel

### Updating
- Double-click on the task
- Modify the title
- Click Enter to save changes
- Click Esc or elsewhere to cancel

### Delete
- Click 'X' on the right of the task

### Dane task
- Check the checkbox on the left of the task

## Environment of work

### Operating system
- Linux Mint 20.03 64bit

### Web browsers
- Mozilla Firefox
- Google Chrome (Updating tasks/todos not working - CORS)