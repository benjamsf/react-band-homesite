interface BackgroundPhotoProps {
  imageUrl: string;
}

function BackgroundPhoto({ imageUrl }: BackgroundPhotoProps) {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center -z-10"
      style={{
        backgroundImage: `url(${imageUrl})`,
        height: "calc(100vh - 4rem)",
      }}
    />
  );
}

export default BackgroundPhoto;
