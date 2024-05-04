import { useRouter } from "next/router";

const SidebarTweetButton = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <div></div>
    </div>
  );
};

export default SidebarTweetButton;
