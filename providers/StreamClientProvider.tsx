"use client"

import { tokenProvider } from "@/actions/stream.actions";
import {
    StreamVideo,
    StreamVideoClient
} from "@stream-io/video-react-sdk";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;

export const StreamClientProvider = ({ children }: { children: ReactNode }) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();

    const { data: session, status } = useSession()
    console.log(session,status);
    useEffect(() => {
        if (status === "unauthenticated") {
            redirect("/api/auth/signin");
        }
        if (status != "authenticated" || !session) return;
        const client = new StreamVideoClient({
            apiKey,
            user: {
                id: session.user?.id,
                name: session.user.name,

            },
            tokenProvider: tokenProvider
        });
        console.log(client)
        setVideoClient(client);
    }, [session, status])

    if (!videoClient) {
        return <body>
            <p>lloading...</p>
        </body>
    }

    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    );
};