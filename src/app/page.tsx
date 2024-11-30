import Chat from "./components/chat";
import Footer from "./components/footer";
import Setting from "./components/setting";
export default function Home() {
  return (
    <>
        <div className="w-full h-screen relative">
            <Setting/>
            <Chat/>
            <Footer/>
        </div>
    </>
  );
}
