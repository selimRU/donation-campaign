import { Link } from "react-router-dom";


const Category = ({ category}) => {
    const { id, image, category_name, title, cardBgColor, categoryBgColor, categoryTextColor, titleTextColor
    } = category;
    return (
        <Link to={`/details/${id}`} state={category_name}>
            <div style={{ backgroundColor: cardBgColor }} className=" space-y-3 pb-5 rounded-md" >
                <img className="w-full rounded-lg" src={image} alt="" />
                <h2 style={{ color: categoryTextColor, backgroundColor: categoryBgColor }} className=" text-sm text-center w-[30%] ml-5 py-1 rounded-sm">{category_name}</h2>
                <p style={{ color: titleTextColor }} className=" text-lg ml-5">{title}</p>
            </div ></Link>
    );
};

export default Category;