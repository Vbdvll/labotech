# Expense Tracker

Application web fullstack pour suivre les depenses quotidiennes, visualiser les tendances et exporter des rapports PDF.

## Stack

- Frontend: React, Vite, TailwindCSS, React Router, Axios, Recharts, React Hook Form, React Hot Toast
- Backend: Django, Django REST Framework, Simple JWT, django-filter, ReportLab
- Base de donnees: SQLite en developpement
- Deploiement: frontend compatible Vercel, backend compatible Render/Railway

## Architecture

```text
expense-tracker/
├── frontend/        # App React Vite
└── backend/         # API Django REST
```

Le backend applique une isolation stricte par utilisateur: chaque endpoint de depenses filtre par `request.user`.

## Installation backend

```bash
cd expense-tracker/backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
python manage.py migrate
python manage.py runserver
```

API locale: `http://localhost:8000/api`

## Installation frontend

```bash
cd expense-tracker/frontend
npm install
copy .env.example .env
npm run dev
```

App locale: `http://localhost:5173`

## Variables d'environnement

Backend:

- `SECRET_KEY`
- `DEBUG`
- `ALLOWED_HOSTS`
- `CORS_ALLOWED_ORIGINS`
- `ACCESS_TOKEN_MINUTES`
- `REFRESH_TOKEN_DAYS`

Frontend:

- `VITE_API_URL`

## Fonctionnalites

- Inscription, connexion, logout avec JWT
- Routes privees cote React
- CRUD complet des depenses
- Categories par defaut et modes de paiement
- Filtres par date, categorie, recherche et tri
- Dashboard responsive avec cartes, pie chart, courbes et histogrammes
- Rapports journalier, hebdomadaire et mensuel
- Export PDF

## Deploiement

### Backend Render

Le repo contient un `render.yaml` a la racine du repository. Il declare:

- un service web `expense-tracker-api`;
- une base PostgreSQL `expense-tracker-db`;
- `rootDir: expense-tracker/backend`;
- `buildCommand: bash build.sh`;
- `startCommand: gunicorn config.wsgi:application`;
- `healthCheckPath: /api/health/`.

Sur le plan gratuit Render, `preDeployCommand` n'est pas supporte. Les migrations sont donc lancees dans `backend/build.sh` apres `collectstatic`.

Dans Render:

1. Creer un nouveau Blueprint depuis le repo GitHub.
2. Choisir la branche `expense-tracker`.
3. Laisser Render lire `render.yaml`.
4. Apres le premier deploy backend, copier l'URL publique du backend.

Variables importantes deja prevues:

- `DATABASE_URL`
- `SECRET_KEY`
- `DEBUG=False`
- `ALLOWED_HOSTS`
- `CORS_ALLOWED_ORIGINS`
- `CORS_ALLOWED_ORIGIN_REGEXES`
- `CSRF_TRUSTED_ORIGINS`

### Frontend Vercel

Importer le meme repo GitHub dans Vercel avec:

- Branch: `expense-tracker`
- Root Directory: `expense-tracker/frontend`
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variable: `VITE_API_URL=https://votre-backend.onrender.com/api`

Le fichier `frontend/vercel.json` ajoute une rewrite SPA vers `index.html`, necessaire pour React Router.

### Connexion backend/frontend

Quand Vercel donne l'URL frontend finale, mettre a jour dans Render:

- `CORS_ALLOWED_ORIGINS=https://votre-frontend.vercel.app`
- `CSRF_TRUSTED_ORIGINS=https://votre-frontend.vercel.app`

Le `render.yaml` contient aussi une regex qui autorise les domaines Vercel preview:

```text
^https://.*\.vercel\.app$
```

### Anciennes notes rapides

Frontend Vercel:

- Build command: `npm run build`
- Output directory: `dist`
- Variable: `VITE_API_URL=https://votre-api.example.com/api`

Backend Render/Railway:

- Build command: `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate`
- Start command: `gunicorn config.wsgi:application`
- Definir `DEBUG=False`, `SECRET_KEY`, `ALLOWED_HOSTS` et `CORS_ALLOWED_ORIGINS`.
