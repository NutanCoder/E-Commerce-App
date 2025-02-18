interface ICategoryCard {
  category: string;
}
function CategoryCard(props: ICategoryCard) {
  const category = props.category;
  return <div className="border rounded-xl bg-white p-4">{category}</div>;
}

export default CategoryCard;
