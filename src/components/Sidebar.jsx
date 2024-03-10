import { Stack } from "@mui/material";
import { categories, exploreCategories } from "../utils/contstants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "93%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#6a686867",
            color: "#fff",
          }}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "#6a686867",
              marginRight: "18px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : ".3",
              marginRight: "18px",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
      <br />
      <br />

      {exploreCategories.map((category) => (
        <button
          className="category-btn explore"
          style={{
            background: category.name === selectedCategory && "#6a686867",
            color: "#fff",
          }}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          {category.name === "Music" && (
            <div className="explore__category">
              <p>Explore</p>
            </div>
          )}
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "#6a686867",
              marginRight: "18px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : ".3",
              marginRight: "18px",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
