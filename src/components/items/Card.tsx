interface CardProps {
  title: string;
  content: string;
}

function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;
