import { useLikes } from './hooks/useLikes'; // to‘g‘ri yo‘l bo‘lishi kerak

const MyComponent = () => {
  const { likes, toggleLike } = useLikes();

  // misol uchun tugma bosishda:
  const handleClick = (id) => {
    toggleLike(id);
  };

  return (
    <div>
      <button onClick={() => handleClick(5)}>Like 5</button>
      <p>{likes.includes(5) ? "Liked" : "Not Liked"}</p>
    </div>
  );
};
