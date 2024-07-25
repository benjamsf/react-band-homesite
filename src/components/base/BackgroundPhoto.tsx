interface BackgroundPhotoProps {
  imageUrl: string;
}

function BackgroundPhoto({ imageUrl }: BackgroundPhotoProps) {
  return (
    <div
      className="absolute top-0 left-0 w-full"
      style={{
        backgroundImage: `url(${imageUrl})`,
        height: '85vh', // 85% of the viewport height
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}

export default BackgroundPhoto;
