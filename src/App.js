const App = () => {
  const categories = [
    { id: "1", title: "Hats" },
    { id: "2", title: "Mens" },
    { id: "3", title: "Sneakers" },
    { id: "4", title: "Womens" },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title }) => {
        return (
          <div className="category-container">
            {/* <img /> */}
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
