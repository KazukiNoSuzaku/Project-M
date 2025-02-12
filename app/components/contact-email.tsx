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
} from '@react-email/components';
import { Tailwind } from "@react-email/components";
type ContactEmailProps={
    message:string;
    email:string;
    name:string
}

export default function ContactEmail({
    message,
    email,
    name
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
                            <Heading className="text-sky-500 text-[1.2rem]">New message from {name}:</Heading>
                            <Text className="text-black text-[1rem]">{message}</Text>
                            <Hr/>
                            <Text >The sender's email is : {email}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}