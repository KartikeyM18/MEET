import JoinMeetingBtn from "@/components/JoinMeetingBtn";
import LoginButton from "@/components/login-btn";
import StartMeetingBtn from "@/components/StartMeetingBtn";

export default function Home() {
  return <div>
    <LoginButton />
    <StartMeetingBtn />
    <JoinMeetingBtn />
  </div>;
}
