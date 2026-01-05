import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Spinner,
} from "@heroui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export const UserButton = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Spinner />;
  }

  const avatarFallback = session?.user?.firstName?.charAt(0).toUpperCase();

  //signout handler
  const handleSignOut = async () => {
    await signOut({
      redirect: false,
    });
    router.push("/");
  };

  return (
    <div>
      {session ? (
        <Dropdown placement="bottom-start">
          <DropdownTrigger className="p-0 m-0 flex items-center gap-2 cursor-pointer">
            <div className="flex items-center gap-2">
              <Avatar
                as="button"
                isBordered
                src={session.user?.image || undefined}
                showFallback
                name={avatarFallback}
                className="transition-transform hover:opacity-75 focus:outline-none focus:ring-0"
              />
              <span className="text-cyan-950">{session.user?.name}</span>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Chat</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={() => handleSignOut()}
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <div>
          <p>sign up</p>
        </div>
      )}
    </div>
  );
};

export default UserButton;
