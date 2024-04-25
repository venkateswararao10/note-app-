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
        "PASSWORD": "",
        "HOST": "localhost",
        "PORT": "",
    }
}
```
