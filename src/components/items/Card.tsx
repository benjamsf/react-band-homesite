interface CardProps {
  title: string;
  content: string;
  className?: string;
}

function Card({ title, content, className = "" }: CardProps) {
  return (
    <div
      className={`relative bg-black
     bg-opacity-70 p-6 rounded-lg shadow-lg w-full mb-2 max-w-md text-center ${className}`}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;
