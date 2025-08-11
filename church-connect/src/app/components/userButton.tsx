import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export const UserButton = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const avatarFallback = session?.user?.firstName?.charAt(0).toUpperCase();

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
          <DropdownTrigger>
            <div className="flex items-center gap-8">
              <Avatar
                as="button"
                isBordered
                src={session.user?.image || undefined}
                showFallback
                name={avatarFallback}
                className="transition-transform hover:opacity-75"
              />
              <span>{session.user?.name}</span>
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
