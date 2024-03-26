import {
    IonApp,
    IonIcon,
    IonLabel,
    IonPage,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
  } from "@ionic/react";
  import { IonReactRouter } from "@ionic/react-router";
  import React from "react";
  import { Redirect, Route } from "react-router";
  import Tab1 from "./Tab1";
  import Tab2 from "./Tab2";
  import { triangle, ellipse, square } from "ionicons/icons";
  
  const Settings: React.FC = () => {
  
    return (
        <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/app/settings/tab1" component={Tab1} exact={true} />
              <Route path="/app/settings/tab2" component={Tab2} exact={true} />
              
              <Route path="/app/settings" render={() => <Redirect to="/app/settings/tab1" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/app/settings/tab1">
                <IonIcon icon={triangle} />
                <IonLabel>Tab 1</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/app/settings/tab2">
                <IonIcon icon={ellipse} />
                <IonLabel>Tab 2</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    );
  };
  
  export default Settings;
  