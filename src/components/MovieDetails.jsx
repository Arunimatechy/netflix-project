import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const { id } = useParams();

  const profileId = useSelector(
    (state) => state.profile.activeProfileId
  );

  const movie = useSelector((state) =>
    state.movies.filtered.find((m) => m.id === Number(id))
  );

  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      {/* use profileId safely */}
    </div>
  );
};

export default MovieDetails;

