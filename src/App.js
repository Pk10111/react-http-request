import "./App.css";
import { Main } from "./Components/Main";
import { RecipeList } from "./Components/RecipeList";
import { SearchBar } from "./Components/SearchBar";
import Box from "@mui/material/Box";
function App() {
  return (
    <div className="App">
      <Box sx={{ minWidth: 275, padding: 5 }}>
        <Main>
          <SearchBar />
        </Main>
      </Box>
    </div>
  );
}

export default App;
