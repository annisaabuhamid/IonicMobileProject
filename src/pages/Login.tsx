import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import yamaha from "../assets/yamaha_logo.png";
const Login: React.FC = () => {
  const doLogin = (event: any) => {
    event?.preventDefault();
    console.log("doLogin");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Mobile Apps</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <div className="ion-text-center ion-padding">
          <img src={yamaha} alt="yamaha logo" width="50%" />
        </div>
        <IonCard>
          <IonCardContent>
            <form onSubmit={doLogin}>
              <IonInput
                fill="outline"
                labelPlacement="floating"
                label="Email"
                type="email"
                placeholder="test@gmail.com"
              ></IonInput>
              <IonInput
                className="ion-margin-top"
                fill="outline"
                labelPlacement="floating"
                label="Password"
                type="password"
                placeholder="test@gmail.com"
              ></IonInput>
              <IonButton
                type="submit"
                expand="block"
                className="ion-margin-top"
              >
                Login
                <IonIcon icon={logInOutline} slot="end" />
              </IonButton>
              <IonButton
                routerLink="/register"
                type="button"
                expand="block"
                color={"secondary"}
                className="ion-margin-top"
              >
                Create Account
                <IonIcon icon={personCircleOutline} slot="end" />
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
