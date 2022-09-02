import { Card } from "./components/Card";
import profile from "./assets/profilePic.svg";

function App() {
  return (
    <>
      <Card
        image={profile}
        contact="Contact Name "
        phone="567 432 12 32 "
        email="contact1@gmail.com "
      />
    </>
  );
}

export default App;
