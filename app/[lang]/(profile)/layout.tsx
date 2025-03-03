"use client";
import { MainContainer, ProfileHeader } from "@/shared";
import { ProfileMenu } from "@/widgets/Profile";

import "./styles.scss";
import { useMediaQuery } from "react-responsive";
import { AppStoreProvider } from "@/store/App/provider";
import { getUserApi } from "@/entities/Session/api/index";
import { useParams } from "next/navigation";

export default async function ProfileLayout({ children }) {
  // const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const { ticketId } = useParams();
  const { data: user } = await getUserApi();

  return (
    <AppStoreProvider
      initialData={{
        user,
        game: {
          list: [],
        },
      }}
    >
      <div
        className={`profile-layout  w-full ${ticketId && "profile-layout__ticket"}`}
      >
        <MainContainer classes="flex !max-w-[1172px] items-start h-full">
          {true && <ProfileMenu />}
          <div className="flex w-full flex-col gap-6 border border-[#fff]/[.01] bg-[#0C0D0F]/60">
            {ticketId ? null : (
              <ProfileHeader
                nickname={user.name}
                skin={user.avatar}
                notifications={0}
              />
            )}

            {children}
          </div>
        </MainContainer>
      </div>
    </AppStoreProvider>
  );
}
