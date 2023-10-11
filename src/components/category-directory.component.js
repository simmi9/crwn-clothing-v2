import CategoryItem from "./category-item.component";

const DirectoryComponent = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        console.log(category);
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default DirectoryComponent;
