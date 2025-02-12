import React from "react";
import{
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Img,
    Row,
    Column,
} from '@react-email/components'
import { Tailwind } from "@react-email/components";
type ContactEmailProps={
    name:string;
    requestId:string
}

export default function RequestEmail({
    name,
    requestId,
}:ContactEmailProps){


    return(
        <Html>
            <Head/>
            <Preview>New message from Frost Forge Studio</Preview>
            <Tailwind>
                <Body className="bg-grey-100">
                    <Container>
                        <Section>
                            <Row>
                                <Img
                                className="mx-auto"
                                src="https://frostforgestudio.s3.eu-west-2.amazonaws.com/frostforge_logo_text.PNG"
                                width="175"
                                height="50"
                                alt="Frost Forge Sudio"
                                />
                            </Row>
                        </Section>
                        <Section>
                        
                            <Hr/>
                            <Heading className="text-sky-500 font-semibold text-[1rem]">Your Request is Received:</Heading>
                            <Text className="text-black text-[1rem]">Dear {name}:</Text>
                            <Text className="text-black text-[1rem]">Thank you for using Frost Forge Web Services.
                             We have received your request, and we will get back to you within 24 hours. Please review your reference number and details.</Text>
                            <Text className="text-black text-[1rem]">If you don't want to proceed, you can ignore this message.</Text>
                            <Row>
                                <Column>
                                    <Text className="text-black font-semibold text-[1rem]">Reference Number</Text>
                                    <Text className="text-black font-semibold text-[1.5rem]">{requestId}</Text>
                                </Column>
                            </Row>

                            <Hr/>
                            <Text>Thank you,</Text>
                            <Text className="text-black text-[1.2rem]">Frost Forge Studio Team</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}