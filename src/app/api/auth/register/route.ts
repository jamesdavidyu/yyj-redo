import { getYyjApiHttpClient } from "@/lib/yyj-api-http-client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const client = getYyjApiHttpClient();

        const registerPayload = { ...body };
        delete registerPayload["confirmPassword"];

        await client.registerUser(registerPayload);

        return NextResponse.json({ message: "Success" });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
        return NextResponse.json(
            { message: "Error registering account." },
            { status: 500 }
        );
    }
}