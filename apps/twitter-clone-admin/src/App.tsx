import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TweetList } from "./tweet/TweetList";
import { TweetCreate } from "./tweet/TweetCreate";
import { TweetEdit } from "./tweet/TweetEdit";
import { TweetShow } from "./tweet/TweetShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { LikeList } from "./like/LikeList";
import { LikeCreate } from "./like/LikeCreate";
import { LikeEdit } from "./like/LikeEdit";
import { LikeShow } from "./like/LikeShow";
import { RetweetList } from "./retweet/RetweetList";
import { RetweetCreate } from "./retweet/RetweetCreate";
import { RetweetEdit } from "./retweet/RetweetEdit";
import { RetweetShow } from "./retweet/RetweetShow";
import { FollowerList } from "./follower/FollowerList";
import { FollowerCreate } from "./follower/FollowerCreate";
import { FollowerEdit } from "./follower/FollowerEdit";
import { FollowerShow } from "./follower/FollowerShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { ChatRoomList } from "./chatRoom/ChatRoomList";
import { ChatRoomCreate } from "./chatRoom/ChatRoomCreate";
import { ChatRoomEdit } from "./chatRoom/ChatRoomEdit";
import { ChatRoomShow } from "./chatRoom/ChatRoomShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TwitterClone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Tweet"
          list={TweetList}
          edit={TweetEdit}
          create={TweetCreate}
          show={TweetShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Like"
          list={LikeList}
          edit={LikeEdit}
          create={LikeCreate}
          show={LikeShow}
        />
        <Resource
          name="Retweet"
          list={RetweetList}
          edit={RetweetEdit}
          create={RetweetCreate}
          show={RetweetShow}
        />
        <Resource
          name="Follower"
          list={FollowerList}
          edit={FollowerEdit}
          create={FollowerCreate}
          show={FollowerShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="ChatRoom"
          list={ChatRoomList}
          edit={ChatRoomEdit}
          create={ChatRoomCreate}
          show={ChatRoomShow}
        />
      </Admin>
    </div>
  );
};

export default App;
