import {useParams} from 'react-router-dom';
import '../../components/FormCard/styles.css';
import FormCard from "../../components/FormCard";

function Form() {

    const params = useParams();

    return (
     <FormCard movieId={`${params.movieId}`} />
    )
}

export default Form;
