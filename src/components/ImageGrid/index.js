import * as React from "react";
import Image from "next/image";
import ImageModal from "../ImageModal";

function useClickAway(ref, handler) {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const ImageGrid = () => {
  const modalRef = React.useRef(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const handleImageClick = (url) => {
    setSelectedImage(url);
    setModalOpen(true);
  };

  useClickAway(modalRef, () => setModalOpen(false));

  return (
    <div className="m-[0 auto 32px auto] w-full">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
        <div className="w-full h-ful">
          <Image
            onClick={() => handleImageClick("/img/AnnaJordan-2.jpg")}
            src="/img/AnnaJordan-2.jpg"
            alt="Wedding"
            width={0}
            height={0}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <Image
          onClick={() => handleImageClick("/img/AnnaJordan-3.jpg")}
          src="/img/AnnaJordan-3.jpg"
          alt="Wedding"
          width={0}
          height={0}
          layout="responsive"
          objectFit="contain"
        />
        <Image
          onClick={() => handleImageClick("/img/AnnaJordan-4.jpg")}
          src="/img/AnnaJordan-4.jpg"
          alt="Wedding"
          width={0}
          height={0}
          layout="responsive"
          objectFit="contain"
        />
        <Image
          onClick={() => handleImageClick("/img/FranklinKristin-1.jpg")}
          src="/img/FranklinKristin-1.jpg"
          alt="Wedding"
          width={0}
          height={0}
          layout="responsive"
          objectFit="contain"
        />
        <Image
          onClick={() => handleImageClick("/img/FranklinKristin-2.jpg")}
          src="/img/FranklinKristin-2.jpg"
          alt="Wedding"
          width={0}
          height={0}
          layout="responsive"
          objectFit="contain"
        />
        <Image
          onClick={() => handleImageClick("/img/FranklinKristin-3.jpg")}
          src="/img/FranklinKristin-3.jpg"
          alt="Wedding"
          width={0}
          height={0}
          layout="responsive"
          objectFit="contain"
        />
        <Image
          onClick={() => handleImageClick("/img/KatieDave-1.jpg")}
          src="/img/KatieDave-1.jpg"
          alt="Wedding"
          width={0}
          height={0}
          layout="responsive"
          objectFit="contain"
        />
        <Image
          onClick={() => handleImageClick("/img/KatieDave-2.jpg")}
          src="/img/KatieDave-2.jpg"
          alt="Wedding"
          width={0}
          height={0}
          layout="responsive"
          objectFit="contain"
        />
        <Image
          onClick={() => handleImageClick("/img/KatieDave-3.jpg")}
          src="/img/KatieDave-3.jpg"
          alt="Wedding"
          width={0}
          height={0}
          layout="responsive"
          objectFit="contain"
        />
        <Image
          onClick={() => handleImageClick("/img/KatieDave-4.jpg")}
          src="/img/KatieDave-4.jpg"
          alt="Wedding"
          width={0}
          height={0}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <ImageModal open={modalOpen}>
        <div className="fixed top-0 right-0 h-[100vh] w-[100vw] bg-black bg-opacity-75">
          <div className="h-full w-full md:w-[75%] m-auto p-2 md:p-8">
            {selectedImage && (
              <Image
                ref={modalRef}
                src={selectedImage}
                alt="Wedding"
                width={0}
                height={0}
                layout="responsive"
                objectFit="contain"
              />
            )}
          </div>
        </div>
      </ImageModal>
    </div>
  );
};

export default ImageGrid;
