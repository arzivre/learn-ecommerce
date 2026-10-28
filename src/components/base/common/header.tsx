import { CartSheet } from "#/components/containers/store/cart/cart-sheet";
import { Button } from "#/components/ui/button";
import { useCartStore } from "#/lib/store/cart-store";
import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag } from "lucide-react";
import { ThemeToggle } from "../provider/theme-toggle";
import { Navbar } from "./navbar";
import { MobileMenu } from "./mobile-menu";
import { useSession } from "#/lib/auth/auth-client";

const navigationItems = [
    { to: "/", label: "Home" },
    { to: "/product", label: "Products" },
    { to: "/category", label: "Categories" },
];

export default function Header() {
    const { data } = useSession();
    const user = data?.user;
    const { totalItems, setIsOpen } = useCartStore();
    return (
        <header className="@container sticky top-0 z-40 w-full border-b border-dashed bg-background backdrop-blur supports-filter:bg-background/80">
            <div className="@container container mx-auto grid grid-cols-2 items-center px-4 py-7 @6xl:grid-cols-3">
                <Navbar items={navigationItems} />

                <div className="flex items-center justify-start @6xl:justify-center">
                    <Link
                        to="/"
                        className="text-xl font-bold tracking-tight @6xl:text-4xl dark:text-white"
                    >
                        Shop
                        <span className="text-4xl text-primary">.</span>
                        Stack
                    </Link>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <div className="hidden items-center gap-2 @6xl:flex">
                        <Button
                            type="button"
                            aria-label="Open Cart"
                            size={"icon-lg"}
                            variant={"outline"}
                            onClick={() => setIsOpen(true)}
                            className="relative"
                        >
                            <ShoppingBag className="size-5 @7xl:size-6" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                                    {totalItems}
                                </span>
                            )}
                        </Button>

                        <CartSheet />

                        <ThemeToggle />

                        {user ? (
                            <Button variant="outline" size={'lg'}>Logout</Button>
                        ) : (
                            <Button variant="outline" size={'lg'}>Login</Button>
                        )}
                    </div>

                    <div className="flex @6xl:hidden">
                        <MobileMenu
                            navigationItems={navigationItems}
                            trigger={
                                <Button
                                    variant="secondary"
                                    size="icon-lg"
                                    aria-label="Open menu"
                                    className="rounded-xl"
                                >
                                    <Menu className="size-5" />
                                </Button>
                            }
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
