import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import image1 from "../assets/intro/image-1.png";
import image2 from "../assets/intro/image-2.png";
import image3 from "../assets/intro/image-3.png";
import image4 from "../assets/intro/image-4.png";
import "./Intro.css";

interface ContainerProps {
  onFinish: () => void;
}
const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};
const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={image1} alt="image 1" />
        <IonText>
          <h3>Music connect us</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="image 2" />
        <IonText>
          <h3>Music connect us</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="image 3" />
        <IonText>
          <h3>Music connect us</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image4} alt="image 4" />
        <IonText>
          <h3>Music connect us</h3>
        </IonText>
        <IonButton onClick={() => onFinish()}>Finish</IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
