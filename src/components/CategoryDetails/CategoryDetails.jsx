import { useLoaderData, useParams } from 'react-router-dom';
import Detail from './Detail';

const CategoryDetails = () => {
    const { id } = useParams();
    console.log(id);
    const categories = useLoaderData();
    const category = categories.find(item => item.id == id)
    console.log(category);
    return (
        <div>
            <Detail category={category}></Detail>
        </div>
    );
};

export default CategoryDetails;