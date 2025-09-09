import Image from "next/image";
import { ThemeToggler } from "./ThemeToggler";
import { GenreDropDown } from "./GenreDropDown";
import { SearchBar } from "./SearchBar";
import Link from "next/link";

export const MenuBar = () => {
  return (
    <div
      className="px-20 py-[11.5px] flex justify-between items-center
    "
    >
      <Link href="#">
        <Image
          src={"./images/LogoLightMode.svg"}
          alt=""
          width={92}
          height={20}
        ></Image>
      </Link>

      <div className="flex gap-3">
        <GenreDropDown />
        <SearchBar />
      </div>

      <ThemeToggler />
    </div>
  );
};
