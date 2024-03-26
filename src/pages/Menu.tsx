import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import List from "./List";
import Settings from "./Settings";
import { Redirect, Route } from "react-router";
import { homeOutline, logOutOutline, newspaperOutline } from "ionicons/icons";

const Menu: React.FC = () => {
  const paths = [
    { name: "Home", url: "/app/list", icon: homeOutline },
    { name: "Settings", url: "/app/settings", icon: newspaperOutline },
  ];

  return (
    <IonPage>
        <IonSplitPane contentId="main" >
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar color={"secondary"}>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {paths.map((item, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem detail={false} routerLink={item.url} routerDirection="none" >
                <IonIcon slot="start" icon={item.icon}/>
                {item.name}
              </IonItem>
            </IonMenuToggle>
          ))}
           <IonMenuToggle  autoHide={false}>
              <IonItem detail={false} routerLink='/'routerDirection="root" >
                <IonIcon slot="start" icon={logOutOutline}/>
                Logout
              </IonItem>
            </IonMenuToggle>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="main">
        <Route path="/app/list" component={List} />
        <Route path="/app/settings" component={Settings} />
        <Route path="/app" render={() => <Redirect to="/app/list" />} exact={true} />
      </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
