# React + TypeScript + Vite - GitHub Pages Deployment

Dieses Projekt zeigt, wie man eine React-Anwendung mit GitHub Actions automatisch auf GitHub Pages deployed.

## Was sind GitHub Actions?

- GitHub Actions ist eine **CI/CD-Plattform** (Continuous Integration / Continuous Deployment), die es dir ermöglicht, deine Build-, Test- und Deployment-Prozesse direkt von deinem GitHub-Repository aus zu automatisieren.

**Wichtige Begriffe:**

- **Workflow**: Ein automatisierter Prozess, definiert in einer YAML-Datei
- **Job**: Eine Gruppe von Schritten, die auf derselben Runner-Maschine ausgeführt werden
- **Step**: Eine einzelne Aufgabe innerhalb eines Jobs
- **Runner**: Eine virtuelle Maschine, die deine Workflows ausführt
- **Action**: Eine wiederverwendbare Einheit, die eine bestimmte Aufgabe ausführt
- **Artifact**: Dateien, die von einem Job erstellt und für andere Jobs oder zum Herunterladen gespeichert werden

## �� Setup: GitHub Pages mit GitHub Actions

### Schritt 1: Vite-Konfiguration anpassen

Damit deine App auf GitHub Pages korrekt funktioniert, musst du die `base`-URL in der `vite.config.ts` setzen:

```typescript
export default defineConfig({
  plugins: [react()],
  base: "/react-cd/", // Ersetze 'react-cd' mit deinem Repository-Namen
});
```

**Warum?** GitHub Pages hostet deine App unter `https://<username>.github.io/<repo-name>/`. Ohne die richtige `base`-URL würden deine Assets (CSS, JS, Bilder) nicht geladen werden.

### Schritt 2: Workflow-Verzeichnis erstellen

GitHub Actions sucht nach Workflow-Dateien in einem bestimmten Verzeichnis:

```
.github/
  └── workflows/
      └── deploy.yml
```

Erstelle diese Struktur in deinem Projekt:

- erstelle einen Ordner `.github` im Root-Verzeichnis deines Projekts
- darin einen Unterordner `workflows`
- und darin die Datei `deploy.yml`
- oder in deinem Terminal:

```bash
mkdir -p .github/workflows
touch .github/workflows/deploy.yml
```

### Schritt 3: Die Workflow-Datei verstehen

- Unsere `deploy.yml` besteht aus mehreren Abschnitten.
- Hier ist eine detaillierte Erklärung:

#### �� Workflow-Name und Trigger

```yaml
name: Deploy to GitHub Pages

on:
  # Wird bei jedem Push auf den main Branch ausgelöst
  push:
    branches: ["main"]
  # Ermöglicht manuelles Auslösen des Workflows über die Actions-Tab
  workflow_dispatch:
```

**Erklärung:**

- `name`: Der Name, der im Actions-Tab angezeigt wird
- `on`: Definiert, wann der Workflow ausgeführt wird
  - `push`: Bei jedem Push auf den `main`-Branch
  - `workflow_dispatch`: Erlaubt manuelles Auslösen über die GitHub-UI

#### �� Berechtigungen

```yaml
permissions:
  contents: read # Erlaubt das Lesen des Repository-Codes
  pages: write # Erlaubt das Schreiben auf GitHub Pages
  id-token: write # Benötigt für sichere Deployments
```

**Warum wichtig?** GitHub Actions folgt dem Prinzip der minimalen Berechtigungen. Wir geben nur die Rechte, die wirklich benötigt werden.

#### �� Concurrency-Kontrolle

```yaml
concurrency:
  group: "pages"
  cancel-in-progress: true
```

**Erklärung:** Verhindert, dass mehrere Deployments gleichzeitig laufen. Wenn ein neuer Workflow startet, wird der alte abgebrochen.

---

### Schritt 4: Die Jobs verstehen

Unser Workflow hat **zwei separate Jobs**: `build` und `deploy`.

#### �� Build Job

```yaml
build:
  runs-on: ubuntu-latest # Verwendet Ubuntu als Betriebssystem
  steps:
```

**Schritt-für-Schritt Erklärung der Build-Steps:**

1. **Checkout** - Code herunterladen

```yaml
- name: Checkout
  uses: actions/checkout@v4
```

Lädt den Code aus deinem Repository auf den Runner herunter.

2. **Node.js Setup** - Entwicklungsumgebung einrichten

```yaml
- name: Set up Node
  uses: actions/setup-node@v4
  with:
    node-version: 20
    cache: "npm"
```

Installiert Node.js Version 20 und cached npm-Abhängigkeiten für schnellere Builds.

3. **Pages Setup** - GitHub Pages konfigurieren

```yaml
- name: Setup Pages
  uses: actions/configure-pages@v4
```

Konfiguriert GitHub Pages und stellt wichtige Informationen bereit.

4. **Dependencies installieren**

```yaml
- name: Install dependencies
  run: npm ci
```

**Wichtig:** `npm ci` statt `npm install`!

- `npm ci` ist deterministisch (nutzt `package-lock.json`)
- Schneller und zuverlässiger für CI/CD
- Löscht vorher `node_modules`

5. **Build erstellen**

```yaml
- name: Build
  run: npm run build
```

Führt `vite build` aus. Erstellt optimierte Production-Dateien im `dist`-Ordner.

6. **Artefakt hochladen**

```yaml
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./dist
```

Lädt den `dist`-Ordner als Artefakt hoch, damit der Deploy-Job darauf zugreifen kann.

#### �� Deploy Job

```yaml
deploy:
  environment:
    name: github-pages
    url: ${{ steps.deployment.outputs.page_url }}
  runs-on: ubuntu-latest
  needs: build # Wartet, bis der Build-Job erfolgreich war
```

**Wichtig:** `needs: build` bedeutet, dass dieser Job erst startet, wenn `build` erfolgreich abgeschlossen wurde.

**Der Deploy-Schritt:**

```yaml
- name: Deploy to GitHub Pages
  id: deployment
  uses: actions/deploy-pages@v4
```

Nimmt das hochgeladene Artefakt und deployed es auf GitHub Pages.

---

### Schritt 5: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (Einstellungen)
3. Scrolle zu **Pages** im linken Menü
4. Unter "Build and deployment" → **Source**: Wähle **GitHub Actions**

![GitHub Pages Settings](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/publishing-source-drop-down.webp)

---

### Schritt 6: Code committen und pushen

- In deinem VSCode Terminal:

```bash
git add .
git commit -m "feat: add GitHub Actions deployment workflow"
git push origin main
```

### Schritt 7: Deployment beobachten

1. Gehe zum **Actions**-Tab in deinem Repository
2. Du siehst deinen Workflow laufen
3. Klicke darauf für Details zu jedem Schritt
4. Nach erfolgreichem Deployment ist deine App live!

## Die komplette Workflow-Datei

Hier ist die vollständige `deploy.yml`-Datei:

```yaml
name: Deploy to GitHub Pages

on:
  # Wird bei jedem Push auf den main Branch ausgelöst
  push:
    branches: ["main"]
  # Ermöglicht manuelles Auslösen des Workflows über die Actions-Tab
  workflow_dispatch:

# Setzt Berechtigungen für den GITHUB_TOKEN um Deployment zu ermöglichen
permissions:
  contents: read
  pages: write
  id-token: write

# Erlaubt nur eine gleichzeitige Deployment-Ausführung, überspringt laufende Deployments
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # Build Job: Baut die Anwendung
  build:
    runs-on: ubuntu-latest
    steps:
      # Checkt den Repository-Code aus
      - name: Checkout
        uses: actions/checkout@v4

      # Installiert Node.js
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      # Konfiguriert GitHub Pages
      - name: Setup Pages
        uses: actions/configure-pages@v4

      # Installiert die npm Abhängigkeiten
      - name: Install dependencies
        run: npm ci

      # Baut die Anwendung für Produktion
      - name: Build
        run: npm run build

      # Lädt die Build-Artefakte für das Deployment hoch
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  # Deploy Job: Stellt die gebaute Anwendung auf GitHub Pages bereit
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      # Deployed die Anwendung auf GitHub Pages
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## �� Nächste Schritte

1. **Tests hinzufügen**: Erweitere den Workflow um einen Test-Schritt