import { useState } from "react";
import { Image } from "semantic-ui-react";
import { map } from "lodash";
import Slider from "react-slick";
import { FullModal } from "@/components/Shared";
import styles from "./Gallery.module.scss";

export function Gallery(props) {
  const { screenshots } = props;
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) => !prevState);

  // Split screenshots string into an array
  const screenshotsArray = screenshots.split('|');

  const principalImage = screenshotsArray.shift();

  const settings = {
    dots: true,
    dotsClass: styles.dots,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (index) {
      return <Image src={screenshotsArray[index]} />;
    },
  };

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.principal}>
          <Image src={principalImage} onClick={onOpenClose} />
        </div>

        <div className={styles.grid}>
          {screenshotsArray.map((screenshot, index) => (
            <div key={index}>
              <Image src={screenshot} onClick={onOpenClose} />
            </div>
          ))}
        </div>
      </div>

      <FullModal show={show} onClose={onOpenClose}>
        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {screenshotsArray.map((screenshot, index) => (
              <div key={index}>
                <Image src={screenshot} />
              </div>
            ))}
          </Slider>
        </div>
      </FullModal>
    </>
  );
}