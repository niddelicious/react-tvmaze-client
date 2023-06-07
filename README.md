# TV Maze Search App

This is tiny app tosearch  TV Shows using the TV Maze API, written in React Typescript and utilizing Material Tailwind. You can search for a show by name and click on a result to read a summary
## Features

- Search for TV shows by name.
- View details of a TV show such as its name, premiere date, end date, and a brief summary.
- Responsive according to Material Tailwind.
- Search results are shareable through URL.
- Show details are shareable through URL.

## Installation

To run the application you will need [Node.js](https://nodejs.org) installed. Then follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/niddelicious/react-tvmaze-client.git
cd react-tvmaze-client
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Once cloning is complete and the dependencies are installed, you should be able to run the application:

```bash
npm start
```
The app will should be accessible at http://localhost:3000.
## Components

- **`App.tsx`**: Updated according to Material Tailwind.
- **`SearchBar.tsx`**: The search bar on the top of the app.
- **`SearchResults.tsx`**: Listing the results from the search.
- **`ShowCard.tsx`**: An individual result from a search.
- **`ShowDetails.tsx`**: Shows the image, name, premiere date (and ending date, if applicable), and summary of the show.
- **`SpinnerComponent.tsx`**: Displayed while the search is happening.

## Technology Stack

- React: Base framework
- TypeScript: Style and syntax
- TV Maze API: Used for searching and retrieving TV show data.
- Material Tailwind: Used for styling the application.