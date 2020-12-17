import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const InputForm = () => {
    const [movie, setMovie] = useState('');
    const [rating, setRating] = useState(0);
    const [duration, setDuration] = useState('');

     const { addMovie } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            id: Math.floor(Math.random() * 100000000),
            movie,
            rating,
            duration
        };
        addMovie(newMovie);
        setMovie('');
        setRating(0);
        setDuration('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label for="movie">Movie</label>
                    <input type="text" className="form-control" id="movie" name="movie" value={movie} onChange={(e) => setMovie(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label for="rating">Rating</label>
                    <input type="number" className="form-control" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} name="rating" required />
                </div>
                <div className="form-group">
                    <label for="duration">Duration</label>
                    <input type="text" className="form-control" id="duration" value={duration} name="duration" onChange={(e) => setDuration(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default InputForm;
