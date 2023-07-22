import { delay } from "@/lib/delay";
import HeaderLink from "./header-link";

const Header = async () => {
  await delay(5000);
  return (
    <header>
      logo
      <div>
        <HeaderLink />
      </div>
    </header>
  );
};

export default Header;
