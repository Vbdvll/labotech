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

Frontend Vercel:

- Build command: `npm run build`
- Output directory: `dist`
- Variable: `VITE_API_URL=https://votre-api.example.com/api`

Backend Render/Railway:

- Build command: `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate`
- Start command: `gunicorn config.wsgi:application`
- Definir `DEBUG=False`, `SECRET_KEY`, `ALLOWED_HOSTS` et `CORS_ALLOWED_ORIGINS`.
