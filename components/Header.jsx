import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
export function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About CSI", href: "about" },
    { name: "Gallery", href: "gallery" },
    { name: "Admissions", href: "admissions" },
    { name: "Contact CSI", href: "contacts" },
  ];
  const mediaLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/csijuniorschools?mibextid=LQQJ4d",
      img: "/images/facebook.png",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/csijunior?igsh=MTcyeDZiMnkxd2t1dg==",
      img: "/images/instagram.jpeg",
    },
    {
      name: "Youtube",
      href: "https://youtube.com/@csijuniorschool7102?si=ufyfvDghfpTidkta",
      img: "/images/youtube.jpeg",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@csijuniorschool?_t=8ll9q4fmcDt&_r=1",
      img: "/images/tik.png",
    },
  ];
  return (
    <div className="relative z-50 ">
      <header className=" bg-gray-900 fixed text-gray-100 w-full overflow-hidden  h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className=" hidden  flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6  lg:flex  items-center justify-between py-3 px-8">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Image
              src="/images/logo.jpg"
              className="h-6 w-6"
              width={1080}
              height={1080}
            />
            <span className="">CSI JUNOIR SCHOOL</span>
          </Link>

          <div className="flex gap-6 ">
            {navLinks.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.href}
                  className=" transition-colors hover:text-gray-400 text-gray-100"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="flex items-center  py-4 bg-gray-900 ">
          <Link
            href="#"
            className="lg:hidden md:hidden flex items-center gap-2 text-lg font-semibold"
          >
            <Image
              src="/images/logo.jpg"
              className="h-6 w-6"
              width={1080}
              height={1080}
            />
            <span className="">CSI JUNIOR SCHOOL </span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden  absolute right-0 mr-3"
              >
                <Menu className="h-5 w-5 text-gray-900 " />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-center  items-center justify-center  py-7 rounded-md border-transparent  h-[100vh] bg-gray-900    text-gray-100"
            >
              <nav className="grid gap-6 text-lg font-bold">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Image
                    src="/images/logo.jpg"
                    className="h-6 w-6"
                    width={1080}
                    height={1080}
                  />
                  <span className=""> CSI JUNIOR SCHOOL </span>
                </Link>

                {navLinks.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      href={item.href}
                      className=" transition-colors hover:text-gray-50 text-gray-300"
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className="flex gap-4 items-start ">
                  {mediaLinks.map((mediaLink) => {
                    return (
                      <Link href={mediaLink.href}>
                        <Image
                          src={mediaLink.img}
                          alt={mediaLink.name}
                          width={1080}
                          height={1080}
                          className="w-6 h-6 rounded-md"
                        />
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}
