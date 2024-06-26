import {
    IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { checkmarkDoneCircleOutline, checkmarkDoneOutline, logInOutline, personCircleOutline } from "ionicons/icons";
import React from "react";

const Register: React.FC = () => {
  const doRegister = (event: any) => {
    event.preventDefault();
    console.log('doRegister')
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <IonCard>
          <IonCardContent>
            <form onSubmit={doRegister}>
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
                Create my account
                <IonIcon icon={checkmarkDoneOutline} slot="end" />
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
