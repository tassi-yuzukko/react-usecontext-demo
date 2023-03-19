import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "ほげ太郎",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "hoge@sample.com",
  phone: "0XX-XXXX-XXXX",
  company: {
    name: "あひる株式会社"
  },
  website: "http://google.com"
};

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
