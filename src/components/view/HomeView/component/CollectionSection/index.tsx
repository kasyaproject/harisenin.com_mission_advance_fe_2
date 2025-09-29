import VideoCollection from "./component/VideoCollection";

const CollectionSection = () => {
  return (
    <div className="w-full rounded-lg">
      {/* Title */}
      <h2 className="mb-1 text-2xl font-bold lg:text-3xl">
        Koleksi Video Pembelajaran Unggulan
      </h2>
      {/* Description */}
      <p className="text-sm text-gray-600 lg:text-base">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>

      <VideoCollection />
    </div>
  );
};

export default CollectionSection;
