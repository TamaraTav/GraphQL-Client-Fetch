# GraphQL Countries Client

A modern web application that demonstrates GraphQL API integration to fetch and display countries and continents data.

## 🚀 Features

- **Continents Selection**: Dropdown menu to select different continents
- **Countries Display**: Dynamic list of countries for each selected continent
- **Real-time Data**: Fetches data from a live GraphQL API
- **Responsive Design**: Modern and clean user interface
- **Error Handling**: Comprehensive error handling and user feedback

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling and responsive design
- **JavaScript (ES6+)**: Modern JavaScript with async/await
- **GraphQL**: Query language for APIs
- **Fetch API**: Modern HTTP client for making requests

## 📡 API Integration

This application integrates with the [Countries GraphQL API](https://countries.trevorblades.com/) to fetch:

- **Continents**: List of all available continents with names and codes
- **Countries**: Countries filtered by continent using GraphQL filters

### GraphQL Queries Used

**Fetch Continents:**

```graphql
query {
  continents {
    name
    code
  }
}
```

**Fetch Countries by Continent:**

```graphql
query getCountries($code: String) {
  countries(filter: { continent: { eq: $code } }) {
    name
  }
}
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js and npm (for Live Server)

### Installation

1. **Clone or download** the project files
2. **Navigate** to the project directory
3. **Install Live Server** (optional but recommended):
   ```bash
   npm install -g live-server
   ```

### Running the Application

#### Option 1: Direct Browser Opening

Simply double-click on `index.html` file - it will open in your default browser.

#### Option 2: Using Live Server (Recommended)

```bash
live-server
```

This will start a local development server and automatically open the application in your browser.

#### Option 3: Manual Browser Navigation

Open your browser and navigate to:

```
file:///path/to/your/project/index.html
```

## 📁 Project Structure

```
GraphQL-Client-Fetch/
├── index.html          # Main HTML file
├── script.js           # JavaScript application logic
├── Readme.md           # This documentation file
└── .gitignore          # Git ignore file
```

## 🔧 How It Works

1. **Page Load**: Application fetches all continents from the GraphQL API
2. **Continent Selection**: User selects a continent from the dropdown
3. **Data Fetching**: Application queries the API for countries in the selected continent
4. **Display**: Countries are dynamically displayed in a list below the dropdown
5. **Error Handling**: Comprehensive error handling for network issues and API errors

## 🌍 API Endpoint

- **Base URL**: `https://countries.trevorblades.com/`
- **Method**: POST
- **Content-Type**: `application/json`
- **Authentication**: None required (public API)

## 🎯 Key Features Explained

### GraphQL Filtering

The application uses GraphQL filters to efficiently query data:

```javascript
countries(filter: { continent: { eq: $code } })
```

- `filter`: Specifies filtering criteria
- `continent: { eq: $code }`: Filters countries where continent equals the selected code
- `eq`: Equality operator (equals)

### Error Handling

- Network error handling
- GraphQL error detection
- User-friendly error messages
- Graceful fallbacks

### Responsive Design

- Mobile-friendly interface
- Clean and modern UI
- Accessible form elements

## 🐛 Troubleshooting

### Common Issues

1. **API Not Responding**

   - Check internet connection
   - Verify API endpoint is accessible
   - Check browser console for errors

2. **No Data Displayed**

   - Check browser console for GraphQL errors
   - Verify API responses in Network tab
   - Ensure JavaScript is enabled

3. **CORS Issues**
   - Use Live Server instead of direct file opening
   - Check browser console for CORS errors

### Debug Mode

The application includes comprehensive logging:

- Console logs for all API requests
- Response data logging
- Error details and stack traces

## 🔮 Future Enhancements

- [ ] Add country flags and additional information
- [ ] Implement search functionality
- [ ] Add pagination for large country lists
- [ ] Include country details modal
- [ ] Add sorting options
- [ ] Implement caching for better performance

## 📚 Learning Resources

- [GraphQL Official Documentation](https://graphql.org/)
- [Countries GraphQL API](https://countries.trevorblades.com/)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## 🤝 Contributing

Feel free to contribute to this project by:

- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created as a learning project to demonstrate GraphQL API integration with modern web technologies.

---

**Happy Coding! 🎉**
