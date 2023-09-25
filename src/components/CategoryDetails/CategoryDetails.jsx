import { useLoaderData, useParams } from 'react-router-dom';
import Detail from './Detail';

const CategoryDetails = () => {
    const { id } = useParams();
    const categories = useLoaderData();
    const category = categories.find(item => item.id == id)

    return (
        <div>
            <Detail category={category}></Detail>
        </div>
    );
};

export default CategoryDetails;