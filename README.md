# RedSky Coding Challenge (Svelte)

This is a SvelteKit project for the RedSky coding challenge, built with TypeScript, TailwindCSS, and Vite.

## Project Structure

```
redsky-coding-challenge/
│── src/
│   ├── lib/
│   │   ├── components/        # UI Components
│   │   ├── stores/            # Svelte stores
│   │   ├── services/          # API calls
│   │   ├── types.ts           # Type definitions
│   │   ├── index.ts           # Export module
│   ├── routes/                # Svelte pages
│   ├── app.html               # Main HTML file
│   ├── app.css                # Global styles
│   ├── app.d.ts               # TypeScript definitions
│── static/                    # Static assets
│── tests/                     # Unit & integration tests
│── package.json               # Project dependencies
│── tsconfig.json              # TypeScript configuration
│── svelte.config.js           # SvelteKit configuration
│── tailwind.config.js         # TailwindCSS configuration
│── vite.config.ts             # Vite configuration
│── README.md                  # Project documentation
```

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/sotopro/redsky-coding-challenge.git
   cd redsky-coding-challenge
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Project

### Development Mode

```sh
npm run dev
```

### Build the Project

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

### Run Type Checking

```sh
npm run check
```

### Run Type Checking in Watch Mode

```sh
npm run check:watch
```

## API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /api/users     | Get all users     |
| POST   | /api/users     | Create a new user |
| PUT    | /api/users/:id | Update a user     |
| DELETE | /api/users/:id | Delete a user     |

## Technologies Used

- **SvelteKit**: Frontend framework
- **TypeScript**: Type safety
- **TailwindCSS**: Styling framework
- **Vite**: Build tool
- **Lucide-Svelte**: Icon set
- **Zod**: Schema validation
