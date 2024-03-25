import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import yamaha from "../assets/yamaha_logo.png";
import Intro from "../components/Intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = "intro-seen";
const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(true);
  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    const checkStorage = async () => {
      try {
        const seen = await Preferences.get({ key: INTRO_KEY });

        if (seen && seen.value === "true") {
          setIntroSeen(true);
          console.log("Storage value:", seen);
        }
      } catch (error) {
        console.error("Error getting storage value:", error);
      }
    };
    checkStorage();
  }, []);

  const doLogin = async (event: any) => {
    event?.preventDefault();
    await present("logging in...");
    setTimeout(async () => {
      dismiss();
      router.push("/app", "root");
    }, 2000);
  };

  const finishIntro = async () => {
    try {
      await Preferences.set({ key: INTRO_KEY, value: "true" });
      setIntroSeen(true);
      Preferences.set({ key: INTRO_KEY, value: "true" });
    } catch (error) {
      console.error("Error setting intro seen flag:", error);
    }
  };
  const seeIntroAgain = () => {
    setIntroSeen(false);
  };

  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={"primary"}>
              <IonTitle>Mobile Apps</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent scrollY={false} className="ion-padding">
            <IonGrid fixed>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <div className="ion-text-center ion-padding">
                    <img src={yamaha} alt="yamaha logo" width="50%" />
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
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
                      <IonButton
                        fill="clear"
                        size="small"
                        type="button"
                        expand="block"
                        color={"medium"}
                        className="ion-margin-top"
                        onClick={seeIntroAgain}
                      >
                        Watch Intro again
                        <IonIcon icon={personCircleOutline} slot="end" />
                      </IonButton>
                    </form>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
