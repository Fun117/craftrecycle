import Link from "next/link";

export default function Header() {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Recipe",
      href: "/recipe",
    },
    {
      label: "Table",
      href: "/recipe/table",
    },
    {
      label: "look_recycle",
      href: "/recipe/function/look_recycle",
    },
    {
      label: "unlock_recycle",
      href: "/recipe/function/unlock_recycle",
    },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 flex justify-center items-center w-full h-16">
      <div className="flex justify-start items-center container max-w-5xl h-full p-2 bg-background/50 backdrop-blur-md">
        <div className=" mr-5">
          <h1 className="font-bold text-2xl">Craft Recycle</h1>
        </div>
        <nav className="flex gap-2 ml-auto">
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.href}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
