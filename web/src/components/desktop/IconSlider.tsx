type PropsType = {
  imageWidth?: number;
  imageHeight?: number;
  imageMargin?: string;
};

const IconSlider = ({
  imageWidth = 150,
  imageHeight = 38,
  imageMargin = "0 40px",
}: PropsType) => {
  function importAll(r: any) {
    let images = {};
    r.keys().forEach((item: any, index: number) => {
      // @ts-ignore
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("@assets/images/school", false, /\.(png|jpe?g|svg)$/)
  );
  const companyImages = importAll(
    require.context("@assets/images/company", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          overflow: "hidden",
        }}
      >
        {Object.keys(images).map((image, index) => (
          <div style={{ margin: imageMargin }}>
            <img
              key={index}
              //@ts-ignore
              src={images[image].default}
              alt={image}
              width={imageWidth}
              height={imageHeight}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          overflow: "hidden",
        }}
      >
        {Object.keys(companyImages).map((image, index) => (
          <div style={{ margin: imageMargin }}>
            <img
              key={index}
              //@ts-ignore
              src={companyImages[image].default}
              alt={image}
              width={imageWidth}
              height={imageHeight}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default IconSlider;
