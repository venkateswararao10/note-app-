# note-app-
frontend with react and backend with django rest framework
# commands
```bash
git clone https://github.com/venkateswararao10/note-app-.git
```
# Backend

# commands
```bash
cd note-app-/Note_App/Backend_Django
pip install -r requirements.txt
```
# settings.py
```bash
cd note_app
```
In your settings.py, add an entry to your DATABASES setting:

```bash
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "[YOUR_DATABASE_NAME]",
        "USER": "[YOUR_USER_NAME]",
        "PASSWORD": "[YOUR_PASSWORD]",
        "HOST": "localhost",
        "PORT": "[YOUR_PORTNO]",
    }
}
```
AFTER CHANGING Settings.py
```bash
cd ..
```
# commands
```bash
python manage.py makemigrations
python manage.py migrate
```
if u want create superuser
```bash
python manage.py createsuperuser
```
# Run 
```bash
python manage.py runserver
```

# Frontend
take new terminal
# command
```bash
cd note-app-/Note_App/Frontend_React
```
requirements is to install node.js 
```bash
npm install
npm start
```
